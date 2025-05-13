export default function SpaceWaves({
  position = "bottom",
}: {
  position?: "top" | "bottom";
}) {
  return (
    <div
      className={`w-full h-fullabsolute left-0 right-0 overflow-hidden h-20 pointer-events-none ${
        position === "top" ? "top-0 rotate-180" : "bottom-0"
      }`}
    >
      <div className="space-wave wave-1"></div>
      <div className="space-wave wave-2"></div>
      <div className="space-wave wave-3"></div>
    </div>
  );
}
