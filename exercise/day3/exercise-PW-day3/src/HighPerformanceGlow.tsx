import React, { useRef, type MouseEvent } from 'react';

const HighPerformanceGlow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'auto',
        background: `
          radial-gradient(
            900px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
            rgba(56, 189, 248, 0.2),
            transparent 80%
          )
        `
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default HighPerformanceGlow;
