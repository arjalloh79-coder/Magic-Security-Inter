import { useState } from 'react'
import { Logo } from './Logo'

interface PhotoSlotProps {
  src?: string
  srcSet?: string
  sizes?: string
  width?: number
  height?: number
  alt: string
  label?: string
  className?: string
  imgClassName?: string
}

/**
 * Renders a real <img> once `src` has actually loaded; otherwise (missing
 * prop, 404, or load failure) shows a placeholder panel built around the
 * MSI brand badge so the layout never shows a broken-image glyph or a
 * blank frame. Add a file at the given path under /public/images to
 * activate it automatically — no code change needed.
 */
export function PhotoSlot({
  src,
  srcSet,
  sizes,
  width,
  height,
  alt,
  label,
  className = '',
  imgClassName = '',
}: PhotoSlotProps) {
  const [failed, setFailed] = useState(false)

  if (src && !failed) {
    return (
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading="lazy"
        width={width ?? 1200}
        height={height ?? 900}
        onError={() => setFailed(true)}
        className={`${imgClassName} object-cover`}
      />
    )
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden border border-dashed border-white/15 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 text-center ${className}`}
    >
      <div className="grid-overlay absolute inset-0 opacity-40" />
      <Logo className="relative h-12 w-12 opacity-80" />
      <span className="relative max-w-[16rem] px-4 text-xs font-medium uppercase tracking-wider text-white/40">
        {label ?? alt}
      </span>
    </div>
  )
}
