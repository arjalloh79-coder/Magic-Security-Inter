import { useMemo, useState } from 'react'
import { Images, ZoomIn } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'
import { imageSrc, imageSrcSet } from '../lib/assets'
import { galleryImages, type GalleryCategory } from '../data/gallery'
import { PhotoSlot } from './PhotoSlot'
import { GalleryLightbox } from './GalleryLightbox'

type FilterKey = GalleryCategory | 'all'

export function GallerySection() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>()
  const [filter, setFilter] = useState<FilterKey>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const items = useMemo(
    () =>
      galleryImages.map((img, i) => ({
        ...img,
        title: t.gallery.items[i]?.title ?? '',
        alt: t.gallery.items[i]?.alt ?? '',
      })),
    [t],
  )

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: t.gallery.filters.all },
    { key: 'equipment', label: t.gallery.filters.equipment },
    { key: 'intervention', label: t.gallery.filters.intervention },
    { key: 'services', label: t.gallery.filters.services },
  ]

  const filtered = filter === 'all' ? items : items.filter((item) => item.category === filter)

  return (
    <section id="gallery" className="relative bg-ink-950 py-20 sm:py-28">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow inline-flex items-center gap-2">
            <Images className="h-4 w-4" />
            {t.gallery.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">{t.gallery.subtitle}</p>
        </div>

        <div className="reveal mt-10 flex flex-wrap justify-center gap-2.5" style={{ transitionDelay: '80ms' }}>
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 sm:text-sm ${
                filter === f.key
                  ? 'border-accent-500 bg-accent-500 text-white'
                  : 'border-white/15 bg-white/[0.03] text-white/65 hover:border-accent-500/50 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => {
            const globalIndex = items.findIndex((i) => i.file === item.file)
            return (
              <button
                key={item.file}
                type="button"
                onClick={() => setLightboxIndex(filtered.findIndex((i) => i.file === item.file))}
                className="group relative aspect-square overflow-hidden border border-white/10 text-left transition-colors duration-300 hover:border-accent-500/50"
              >
                <PhotoSlot
                  src={imageSrc(item.file)}
                  srcSet={imageSrcSet(item.file, item.width, [{ suffix: '-480w', width: 480 }])}
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  label={item.title}
                  className="h-full w-full"
                  imgClassName="h-full w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <ZoomIn className="mb-2 h-5 w-5 text-accent-500" strokeWidth={1.75} />
                  <p className="text-xs font-semibold uppercase tracking-wide text-white sm:text-sm">{item.title}</p>
                </div>
                <span className="sr-only">{`${item.title} (${globalIndex + 1})`}</span>
              </button>
            )
          })}
        </div>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          items={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
          labels={t.gallery.lightbox}
        />
      )}
    </section>
  )
}
