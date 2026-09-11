import { ImageOff, type LucideIcon } from 'lucide-react'

interface PhotoSlotProps {
  src?: string
  alt: string
  icon?: LucideIcon
  label?: string
  className?: string
  imgClassName?: string
}

/**
 * Renders a real <img> when `src` resolves; otherwise shows a clearly
 * labeled placeholder panel so the layout stays production-ready while
 * client photography is pending. Replace the `src` with a file placed in
 * /public/images to activate it — no code change needed beyond the path.
 */
export function PhotoSlot({ src, alt, icon: Icon = ImageOff, label, className = '', imgClassName = '' }: PhotoSlotProps) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`${imgClassName} object-cover`} />
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 border border-dashed border-white/15 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 text-center ${className}`}
    >
      <div className="grid-overlay absolute inset-0 opacity-40" />
      <Icon className="relative h-8 w-8 text-gold-500/70" strokeWidth={1.5} />
      <span className="relative max-w-[16rem] px-4 text-xs font-medium uppercase tracking-wider text-white/40">
        {label ?? alt}
      </span>
    </div>
  )
}
