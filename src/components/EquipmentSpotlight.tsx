interface EquipmentSpotlightProps {
  className?: string
  title?: string
}

/**
 * Custom vector "flat lay" illustration of the four flagship equipment
 * items (badge, walkie-talkie, torch, duty belt) on a dark uniform-like
 * backdrop. Built as inline SVG rather than a photograph — this project
 * has no photo-generation tool available, and a fabricated "stock photo"
 * of gear MSI doesn't necessarily own would misrepresent their actual
 * equipment. This stays honestly illustrative while still giving the
 * section a dedicated, cohesive visual instead of icons alone.
 */
export function EquipmentSpotlight({ className = '', title }: EquipmentSpotlightProps) {
  return (
    <svg viewBox="0 0 420 420" className={className} role="img" aria-label={title}>
      <defs>
        <radialGradient id="spot-vignette" cx="50%" cy="42%" r="65%">
          <stop offset="0%" stopColor="#1b2127" />
          <stop offset="100%" stopColor="#07090b" />
        </radialGradient>
        <linearGradient id="spot-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="420" height="420" fill="url(#spot-vignette)" />
      {/* subtle woven-fabric texture */}
      <g stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1">
        {Array.from({ length: 21 }, (_, i) => (
          <line key={`t${i}`} x1={i * 21} y1="0" x2={i * 21} y2="420" />
        ))}
      </g>

      {/* duty belt, arcing across the lower half */}
      <g transform="translate(210,300)">
        <path d="M-160 20 Q0 100 160 20 L160 45 Q0 125 -160 45 Z" fill="#1b2127" stroke="#2a323b" strokeWidth="1.5" />
        <rect x="-16" y="18" width="32" height="30" rx="4" fill="#0b0b0c" stroke="#c8102e" strokeWidth="1.5" />
        <circle cx="0" cy="33" r="6" fill="none" stroke="#c8102e" strokeWidth="1.5" />
        {[-120, -80, 80, 120].map((x) => (
          <rect
            key={x}
            x={x - 12}
            y={x < 0 ? 30 - Math.abs(x) * 0.08 : 30 - Math.abs(x) * 0.08}
            width="24"
            height="26"
            rx="3"
            fill="#12161a"
            stroke="#2a323b"
            strokeWidth="1"
          />
        ))}
      </g>

      {/* walkie-talkie, upper left */}
      <g transform="translate(108,140) rotate(-8)">
        <rect x="-26" y="-58" width="52" height="100" rx="9" fill="#12161a" stroke="#2a323b" strokeWidth="1.5" />
        <rect x="-16" y="-46" width="32" height="22" rx="2.5" fill="#0b0b0c" stroke="#c8102e" strokeWidth="1.2" />
        <circle cx="0" cy="-2" r="9" fill="#0b0b0c" stroke="#3a3f45" strokeWidth="1.2" />
        <rect x="-4" y="-72" width="8" height="16" rx="3" fill="#2a323b" />
        <rect x="-14" y="24" width="28" height="8" rx="2" fill="#1f2429" />
        <rect x="-14" y="36" width="28" height="8" rx="2" fill="#1f2429" />
        <rect x="20" y="-40" width="6" height="60" rx="3" fill="#c8102e" fillOpacity="0.85" />
      </g>

      {/* flashlight, upper right */}
      <g transform="translate(308,150) rotate(12)">
        <rect x="-14" y="-70" width="28" height="18" rx="4" fill="#1f2429" stroke="#3a3f45" strokeWidth="1.2" />
        <circle cx="0" cy="-70" r="14" fill="#0b0b0c" stroke="#c8102e" strokeWidth="2" />
        <circle cx="0" cy="-70" r="7" fill="#c8102e" fillOpacity="0.55" />
        <rect x="-11" y="-52" width="22" height="86" rx="7" fill="#12161a" stroke="#2a323b" strokeWidth="1.5" />
        {[-30, -10, 10, 28].map((y) => (
          <rect key={y} x="-11" y={y} width="22" height="4" fill="#0b0b0c" />
        ))}
      </g>

      {/* badge / shield, center */}
      <g transform="translate(210,235)">
        <path
          d="M0 -54 C30 -46 48 -34 48 -14 C48 20 28 46 0 58 C-28 46 -48 20 -48 -14 C-48 -34 -30 -46 0 -54 Z"
          fill="#0b0b0c"
          stroke="#c8102e"
          strokeWidth="2.5"
        />
        <path
          d="M0 -40 C22 -34 36 -25 36 -12 C36 14 20 34 0 44 C-20 34 -36 14 -36 -12 C-36 -25 -22 -34 0 -40 Z"
          fill="none"
          stroke="#c8102e"
          strokeOpacity="0.4"
          strokeWidth="1.2"
        />
        <text x="0" y="10" textAnchor="middle" fontSize="22" fontWeight="800" fill="#ffffff" letterSpacing="1">
          MSI
        </text>
      </g>

      <rect width="420" height="420" fill="url(#spot-sheen)" />
    </svg>
  )
}
