export default function SpaceWaves({
  position = "bottom",
}: {
  position?: "top" | "bottom";
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${
        position === "top" ? "top-0 rotate-180" : "bottom-0"
      }`}
    >
      <div
        className="space-wave wave-1 bg-gradient-to-r from-transparent via-white to-pink-500 opacity-80 z-10"
        style={{ animation: "wave 15s linear infinite" }}
      ></div>
      <div
        className="space-wave wave-2 bg-gradient-to-r from-transparent via-white to-pink-500 opacity-80 z-10"
        style={{ animation: "wave 20s linear infinite" }}
      ></div>
      <div
        className="space-wave wave-3 bg-gradient-to-r from-transparent via-white to-transparent opacity-80 z-10"
        style={{ animation: "wave 25s linear infinite" }}
      ></div>

      <style jsx>{`
        .space-wave {
          position: absolute;
          width: 200%;
          height: 100%;
          top: 0;
          left: 0;
          transform: translateX(0);
        }

        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
