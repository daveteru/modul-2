/* eslint-disable react/no-unknown-property */
import React, { useMemo, useRef, useCallback } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import type { CanvasProps, ThreeEvent } from '@react-three/fiber';
import { shaderMaterial, useTrailTexture } from '@react-three/drei';
import * as THREE from 'three';

interface GooeyFilterProps {
  id?: string;
  strength?: number;
}

interface DotMaterialUniforms {
  resolution: THREE.Vector2;
  mouseTrail: THREE.Texture | null;
  gridSize: number;
  pixelColor: THREE.Color;
}

interface SceneProps {
  gridSize: number;
  trailSize: number;
  maxAge: number;
  interpolate: number;
  easingFunction: (x: number) => number;
  pixelColor: string;
}

interface PixelTrailProps {
  gridSize?: number;
  trailSize?: number;
  maxAge?: number;
  interpolate?: number;
  easingFunction?: (x: number) => number;
  canvasProps?: Partial<CanvasProps>;
  glProps?: WebGLContextAttributes & { powerPreference?: string };
  gooeyFilter?: { id: string; strength: number };
  color?: string;
  className?: string;
}

const GooeyFilter: React.FC<GooeyFilterProps> = ({ id = 'goo-filter', strength = 10 }) => {
  return (
    <svg className="absolute overflow-hidden z-1">
      <defs>
        <filter id={id}>
          <feGaussianBlur in="SourceGraphic" stdDeviation={strength} result="blur" />
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

const MAX_RIPPLES = 5;

const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 100,
    pixelColor: new THREE.Color('#ffffff'),
    rippleCenters: new Array(MAX_RIPPLES).fill(null).map(() => new THREE.Vector2(-1, -1)),
    rippleTimes: new Float32Array(MAX_RIPPLES).fill(-1.0),
    mousePos: new THREE.Vector2(-1, -1),
    uTime: 0.0
  },
  /* glsl vertex shader */ `
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  /* glsl fragment shader */ `
    #define MAX_RIPPLES 5
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;
    uniform vec2 rippleCenters[MAX_RIPPLES];
    uniform float rippleTimes[MAX_RIPPLES];
    uniform vec2 mousePos;
    uniform float uTime;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 gridUvCenter = (floor(uv * gridSize) + 0.5) / gridSize;

      float trail = texture2D(mouseTrail, gridUvCenter).r;

      // Accumulate all active ripples
      float ripple = 0.0;
      float cellSize = 1.0 / gridSize;
      for (int i = 0; i < MAX_RIPPLES; i++) {
        float t = rippleTimes[i];
        if (t < 0.0 || t > 2.0) continue;
        float dist = distance(gridUvCenter, rippleCenters[i]);
        float radius = t * 0.35;
        // Thin ring — 1 cell wide
        float ring = 1.0 - smoothstep(0.0, cellSize * 0.8, abs(dist - radius));
        float fade = 1.0 - smoothstep(0.0, 2.0, t);
        ripple += ring * fade * 0.7;
      }

      float combined = clamp(trail + ripple, 0.0, 1.0);
      gl_FragColor = vec4(pixelColor, combined);
    }
  `
);

function Scene({ gridSize, trailSize, maxAge, interpolate, easingFunction, pixelColor }: SceneProps) {
  const size = useThree(s => s.size);
  const viewport = useThree(s => s.viewport);

  const dotMaterial = useMemo(() => new DotMaterial(), []);
  dotMaterial.uniforms.pixelColor.value = new THREE.Color(pixelColor);

  const rippleIndexRef = useRef(0);
  const rippleTimesRef = useRef(new Float32Array(MAX_RIPPLES).fill(-1.0));

  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: trailSize,
    maxAge: maxAge,
    interpolate: interpolate || 0.1,
    ease: easingFunction || ((x: number) => x)
  }) as [THREE.Texture | null, (e: ThreeEvent<PointerEvent>) => void];

  if (trail) {
    trail.minFilter = THREE.NearestFilter;
    trail.magFilter = THREE.NearestFilter;
    trail.wrapS = THREE.ClampToEdgeWrapping;
    trail.wrapT = THREE.ClampToEdgeWrapping;
  }

  const scale = Math.max(viewport.width, viewport.height) / 2;

  const onClick = useCallback((e: ThreeEvent<PointerEvent>) => {
    if (!e.uv) return;
    const sx = size.width / Math.max(size.width, size.height);
    const sy = size.height / Math.max(size.width, size.height);
    const uvX = (e.uv.x - 0.5) * sx + 0.5;
    const uvY = (e.uv.y - 0.5) * sy + 0.5;
    const idx = rippleIndexRef.current % MAX_RIPPLES;
    dotMaterial.uniforms.rippleCenters.value[idx].set(uvX, uvY);
    rippleTimesRef.current[idx] = 0.0;
    rippleIndexRef.current++;
  }, [size, dotMaterial]);

  useFrame((_, delta) => {
    const times = rippleTimesRef.current;
    for (let i = 0; i < MAX_RIPPLES; i++) {
      if (times[i] >= 0.0 && times[i] <= 2.0) {
        times[i] += delta;
      }
    }
    dotMaterial.uniforms.rippleTimes.value = times;
  });

  return (
    <mesh scale={[scale, scale, 1]} onPointerMove={onMove} onClick={onClick}>
      <planeGeometry args={[2, 2]} />
      <primitive
        object={dotMaterial}
        gridSize={gridSize}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        mouseTrail={trail}
      />
    </mesh>
  );
}

export default function PixelTrail({
  gridSize = 40,
  trailSize = 0.1,
  maxAge = 250,
  interpolate = 5,
  easingFunction = (x: number) => x,
  canvasProps = {},
  glProps = {
    antialias: false,
    powerPreference: 'high-performance',
    alpha: true
  },
  gooeyFilter,
  color = '#ffffff',
  className = ''
}: PixelTrailProps) {
  return (
    <>
      {gooeyFilter && <GooeyFilter id={gooeyFilter.id} strength={gooeyFilter.strength} />}
      <Canvas
        {...canvasProps}
        gl={glProps}
        className={`absolute z-1 ${className}`}
        eventSource={document.documentElement}
        eventPrefix="offset"
        style={{
          ...(gooeyFilter ? { filter: `url(#${gooeyFilter.id})` } : {}),
          pointerEvents: 'none'
        }}
      >
        <Scene
          gridSize={gridSize}
          trailSize={trailSize}
          maxAge={maxAge}
          interpolate={interpolate}
          easingFunction={easingFunction}
          pixelColor={color}
        />
      </Canvas>
    </>
  );
}
