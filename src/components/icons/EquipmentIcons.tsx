interface IconProps {
  className?: string
  strokeWidth?: number
}

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/** Uniform polo/shirt with a chest badge detail. */
export function UniformIcon({ className = 'h-6 w-6', strokeWidth = 1.6 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={strokeWidth}>
      <path d="M8 3.5 4 6l1.6 3L8 7.5V21h8V7.5l2.4 1.5L20 6l-4-2.5-2 1.5h-4L8 3.5Z" />
      <circle cx="12" cy="12" r="1.6" />
    </svg>
  )
}

/** Peaked security cap silhouette. */
export function CapIcon({ className = 'h-6 w-6', strokeWidth = 1.6 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={strokeWidth}>
      <path d="M4 13c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      <path d="M3 13.5h18" />
      <path d="M19 13.5c2.4.3 3.6 1 3.6 1.6 0 .8-2 1.4-4.6 1.4H6c-2.6 0-4.6-.6-4.6-1.4 0-.6 1.2-1.3 3.6-1.6" />
      <circle cx="12" cy="9.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Reinforced security boot silhouette. */
export function BootIcon({ className = 'h-6 w-6', strokeWidth = 1.6 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={strokeWidth}>
      <path d="M9 3v7.2c0 1-.4 2-1.1 2.7L4 16.8c-.6.6-1 1.5-1 2.4V20h17c.6 0 1-.4 1-1v-1.2c0-1-.6-1.9-1.5-2.3l-4.7-2.1c-.8-.4-1.3-1.2-1.3-2.1V3" />
      <path d="M9 6.5h5.5" />
      <path d="M4 20h16" />
    </svg>
  )
}

/** Security baton with grip detail. */
export function BatonIcon({ className = 'h-6 w-6', strokeWidth = 1.6 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={strokeWidth}>
      <rect x="10.5" y="2.5" width="3" height="13" rx="1.2" transform="rotate(20 12 9)" />
      <path d="M8.6 13.4 5 21" />
      <path d="M6.3 15.2h3.4" />
    </svg>
  )
}

/** Handheld flashlight/torch. */
export function TorchIcon({ className = 'h-6 w-6', strokeWidth = 1.6 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={strokeWidth}>
      <path d="M9 3h6l1 3H8l1-3Z" />
      <rect x="8" y="6" width="8" height="4" rx="0.6" />
      <path d="M8.6 10 7 20a1 1 0 0 0 1 1.2h8a1 1 0 0 0 1-1.2L15.4 10" />
      <path d="M3 8.5 6 10" />
      <path d="M3 12.5l3-.7" />
    </svg>
  )
}

/** Handheld two-way radio / walkie-talkie. */
export function WalkieTalkieIcon({ className = 'h-6 w-6', strokeWidth = 1.6 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={strokeWidth}>
      <path d="M9 3.5v2.3" />
      <path d="M6.5 21V8.8a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V21" />
      <rect x="6.5" y="8.8" width="11" height="12.2" rx="1.2" />
      <rect x="9" y="11.5" width="6" height="4.4" rx="0.5" />
      <circle cx="12" cy="18.3" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
