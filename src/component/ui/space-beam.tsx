export default function SpaceBeam({ beams = [1] }: { beams?: number[] }) {
  return (
    <>
      {beams.map((beam) => (
        <div key={beam} className={`beam beam-${beam}`}></div>
      ))}
    </>
  );
}
