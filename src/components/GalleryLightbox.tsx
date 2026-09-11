import { useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { imageSrc } from '../lib/assets'

interface LightboxItem {
  file: string
  alt: string
  title: string
}

interface GalleryLightboxProps {
  items: LightboxItem[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
  labels: { close: string; prev: string; next: string; counterOf: string }
}

export function GalleryLightbox({ items, index, onClose, onNavigate, labels }: GalleryLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const current = items[index]

  useEffect(() => {
    closeRef.current?.focus()
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((index + 1) % items.length)
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + items.length) % items.length)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [index, items.length, onClose, onNavigate])

  if (!current) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.title}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink-950 p-4 backdrop-blur-md animate-fade-in sm:p-8"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label={labels.close}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-accent-500/60 hover:text-accent-500 sm:right-8 sm:top-8"
      >
        <X className="h-5 w-5" />
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate((index - 1 + items.length) % items.length)
            }}
            aria-label={labels.prev}
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-accent-500/60 hover:text-accent-500 sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate((index + 1) % items.length)
            }}
            aria-label={labels.next}
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-accent-500/60 hover:text-accent-500 sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <div className="flex max-h-full max-w-4xl flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
        <img
          src={imageSrc(current.file)}
          alt={current.alt}
          className="max-h-[75svh] w-auto max-w-full rounded-sm border border-white/10 object-contain"
        />
        <div className="text-center">
          <p className="font-display text-base font-semibold uppercase tracking-wide text-white sm:text-lg">
            {current.title}
          </p>
          {items.length > 1 && (
            <p className="mt-1 text-xs text-white/40">
              {index + 1} {labels.counterOf} {items.length}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
