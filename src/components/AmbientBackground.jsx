const grain =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.5"/></svg>';

export const AmbientBackground = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 15% 10%, rgba(149,100,0,0.05), transparent 70%), radial-gradient(50% 40% at 85% 60%, rgba(31,108,159,0.04), transparent 70%), radial-gradient(40% 40% at 50% 90%, rgba(52,101,56,0.04), transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{ backgroundImage: `url("${grain}")` }}
      />
    </div>
  );
};