import PixelTrail from "./Trail";

export default function Gridbg() {
  return (
    <div className="absolute inset-0 min-h-screen h-auto bg-[#212121]">
  <PixelTrail
    gridSize={45}
    trailSize={0.1}
    maxAge={550}
    interpolate={0.5}
    color="#FFFFFF"
    gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
/>
    </div>
  );
}
