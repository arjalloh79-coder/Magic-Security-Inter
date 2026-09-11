interface MapGraphicProps {
  className?: string
  cityLabel: string
  districtLabel: string
}

/**
 * Custom vector "map" — a stylized district grid with a pin on the
 * company's location, not a literal street map (no real street-level
 * geodata is embedded, so it never claims block-accurate cartography).
 * Renders instantly with zero external requests, so it can't get
 * "This content is blocked" the way a keyless Google Maps iframe can.
 * The real map is one click away via the "open in Google Maps" link
 * rendered alongside it.
 */
export function MapGraphic({ className = '', cityLabel, districtLabel }: MapGraphicProps) {
  return (
    <svg viewBox="0 0 480 360" className={className} role="img" aria-label={`${cityLabel} — ${districtLabel}`}>
      <defs>
        <linearGradient id="map-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#12161a" />
          <stop offset="100%" stopColor="#07090b" />
        </linearGradient>
        <radialGradient id="map-glow" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="#c8102e" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#c8102e" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="480" height="360" fill="url(#map-bg)" />
      <rect width="480" height="360" fill="url(#map-glow)" />

      {/* stylized street grid */}
      <g stroke="#ffffff" strokeOpacity="0.07" strokeWidth="1.5">
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`v${i}`} x1={40 + i * 50} y1="0" x2={40 + i * 50} y2="360" />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={30 + i * 50} x2="480" y2={30 + i * 50} />
        ))}
      </g>

      {/* diagonal boulevard accents */}
      <g stroke="#c8102e" strokeOpacity="0.18" strokeWidth="2.5">
        <line x1="0" y1="80" x2="480" y2="180" />
        <line x1="0" y1="280" x2="480" y2="140" />
      </g>

      {/* city blocks */}
      <g fill="#ffffff" fillOpacity="0.045">
        <rect x="60" y="60" width="70" height="50" rx="3" />
        <rect x="150" y="50" width="55" height="65" rx="3" />
        <rect x="270" y="70" width="80" height="45" rx="3" />
        <rect x="70" y="200" width="60" height="55" rx="3" />
        <rect x="180" y="220" width="70" height="50" rx="3" />
        <rect x="320" y="190" width="65" height="60" rx="3" />
        <rect x="370" y="70" width="50" height="55" rx="3" />
      </g>

      {/* compass */}
      <g transform="translate(432, 40)" fill="#ffffff" fillOpacity="0.35">
        <path d="M0 -14 L4 0 L0 14 L-4 0 Z" />
        <text x="0" y="-20" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff" fillOpacity="0.5">
          N
        </text>
      </g>

      {/* location pin with radar pulse */}
      <g transform="translate(240, 168)">
        <circle r="46" fill="none" stroke="#c8102e" strokeOpacity="0.35" strokeWidth="1">
          <animate attributeName="r" values="14;46" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle r="46" fill="none" stroke="#c8102e" strokeOpacity="0.35" strokeWidth="1">
          <animate attributeName="r" values="14;46" dur="2.8s" begin="1.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0" dur="2.8s" begin="1.4s" repeatCount="indefinite" />
        </circle>

        <circle r="16" fill="#0b0b0c" stroke="#c8102e" strokeWidth="2" />
        <path d="M0 -8 L4.5 -1 L0 6 L-4.5 -1 Z" fill="#c8102e" />
      </g>

      <text x="240" y="240" textAnchor="middle" fontSize="17" fontWeight="700" fill="#ffffff" letterSpacing="0.5">
        {districtLabel}
      </text>
      <text
        x="240"
        y="260"
        textAnchor="middle"
        fontSize="11.5"
        fontWeight="600"
        fill="#ffffff"
        fillOpacity="0.45"
        letterSpacing="2"
      >
        {cityLabel.toUpperCase()}
      </text>
    </svg>
  )
}
