import PixelTrail from "./Trail";

export default function Gridbg() {
  return (
    <div className="fixed inset-0 h-full bg-[#212121]">
  <PixelTrail
    gridSize={25}
    trailSize={0.1}
    maxAge={550}
    interpolate={0.5}
    color="#CDCDCD"
    gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
/>
    </div>
  );
}
