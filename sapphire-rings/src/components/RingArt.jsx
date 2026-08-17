// Original SVG ring illustration, parameterized by metal and gem hue.
const metalColors = {
  "18K Yellow Gold": "#d9b063",
  "18K White Gold": "#cfd3d8",
  Platinum: "#c8ccd1",
  "18K Rose Gold": "#d9a38f",
};

export default function RingArt({ metal = "Platinum", hue = 216, className = "" }) {
  const band = metalColors[metal] || "#cfd3d8";
  const gem = `hsl(${hue}, 72%, 42%)`;
  const gemLight = `hsl(${hue}, 78%, 62%)`;
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Ring illustration">
      <defs>
        <radialGradient id={`g-${hue}`} cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor={gemLight} />
          <stop offset="100%" stopColor={gem} />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="150" rx="52" ry="30" fill="none" stroke={band} strokeWidth="7" />
      <ellipse cx="100" cy="150" rx="52" ry="30" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      <g transform="translate(100 92)">
        <path d="M0 -34 L26 -6 L0 34 L-26 -6 Z" fill={`url(#g-${hue})`} stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
        <path d="M0 -34 L26 -6 L0 -14 L-26 -6 Z" fill={gemLight} opacity="0.7" />
        <path d="M-26 -6 L0 34 L0 -14 Z" fill={gem} opacity="0.85" />
        <circle cx="-9" cy="-14" r="3" fill="#fff" opacity="0.8" />
      </g>
    </svg>
  );
}
