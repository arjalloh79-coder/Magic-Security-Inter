interface LogoProps {
  className?: string
  title?: string
}

/**
 * Inline recreation of the MSI eagle badge (black ring / red eagle accents /
 * white eagle body + wordmark) so it renders crisply at any size without an
 * external asset. Drop the client's exact logo file at
 * /public/images/logo-msi.png and swap this component for an <img> tag if a
 * pixel-perfect match to the original artwork is required.
 */
export function Logo({ className = 'h-12 w-12', title = 'MAGIC SECURITY INTER' }: LogoProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label={title}>
      <circle cx="100" cy="100" r="98" fill="#0a0a0a" stroke="#fff" strokeWidth="2" />
      <circle cx="100" cy="100" r="86" fill="none" stroke="#fff" strokeWidth="2" />

      <path
        id="msi-top-arc"
        d="M 24 100 A 76 76 0 0 1 176 100"
        fill="none"
      />
      <path
        id="msi-bottom-arc"
        d="M 30 128 A 76 76 0 0 0 170 128"
        fill="none"
      />
      <text fill="#fff" fontSize="13.5" fontWeight="700" letterSpacing="1.5">
        <textPath href="#msi-top-arc" startOffset="50%" textAnchor="middle">
          MAGIC · SECURITY · INTER
        </textPath>
      </text>
      <text fill="#fff" fontSize="12.5" fontWeight="700" letterSpacing="1.5">
        <textPath href="#msi-bottom-arc" startOffset="50%" textAnchor="middle">
          PROTECTION PRIVEE
        </textPath>
      </text>

      <path d="M40 88 L48 78 L44 90 L52 84 Z" fill="#c8102e" />
      <path d="M160 88 L152 78 L156 90 L148 84 Z" fill="#c8102e" />

      <g transform="translate(100,108)">
        <path
          d="M-38 -6 C-30 -34 -6 -46 10 -44 C-4 -38 -14 -26 -16 -14 C-4 -22 10 -22 20 -14 C6 -14 -6 -4 -10 8 C6 4 18 8 24 18 C10 14 -2 20 -6 30 C6 26 16 32 20 40 C4 34 -12 36 -20 28 C-30 18 -38 8 -38 -6 Z"
          fill="#fff"
        />
        <path
          d="M2 -40 C14 -38 24 -28 26 -14 C18 -20 8 -20 2 -12 C12 -10 20 -2 22 8 C12 2 2 4 -2 12 C8 14 14 22 14 30 C4 24 -6 24 -10 32 C-2 20 6 8 4 -4 C2 -16 -4 -30 2 -40 Z"
          fill="#c8102e"
        />
        <circle cx="14" cy="-30" r="3.6" fill="#c8102e" />
        <circle cx="14" cy="-30" r="1.6" fill="#0a0a0a" />
        <path d="M26 -22 L40 -18 L26 -14 Z" fill="#c8102e" />
      </g>

      <text
        x="100"
        y="150"
        fill="#fff"
        fontSize="30"
        fontWeight="800"
        letterSpacing="4"
        textAnchor="middle"
        fontFamily="Playfair Display, serif"
      >
        MSI
      </text>
    </svg>
  )
}
