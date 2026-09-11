import { CheckCircle2, Users } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'
import { imageSrc, imageSrcSet } from '../lib/assets'
import { PhotoSlot } from './PhotoSlot'

const PHOTO_SIZES = '(min-width: 1024px) 310px, 45vw'

export function PersonnelSection() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  const photos = [
    {
      file: 'agents-mission.jpg',
      width: 720,
      height: 960,
      variants: [{ suffix: '-480w', width: 480 }],
      alt: 'Agent MAGIC SECURITY INTER en mission de sécurité événementielle',
      label: 'Agent en mission — public/images/agents-mission.jpg',
    },
    {
      file: 'agents-vehicle.jpg',
      width: 960,
      height: 720,
      variants: [
        { suffix: '-480w', width: 480 },
        { suffix: '-800w', width: 800 },
      ],
      alt: "Véhicule d'intervention MAGIC SECURITY INTER",
      label: 'Véhicule MSI — public/images/agents-vehicle.jpg',
    },
    {
      file: 'agents-team.jpg',
      width: 551,
      height: 1024,
      variants: [{ suffix: '-480w', width: 480 }],
      alt: "Équipe d'agents MAGIC SECURITY INTER en poste",
      label: 'Équipe MSI — public/images/agents-team.jpg',
    },
    {
      file: 'event-crowd.jpg',
      width: 720,
      height: 960,
      variants: [{ suffix: '-480w', width: 480 }],
      alt: 'Agents MAGIC SECURITY INTER en sécurité événementielle',
      label: 'Sécurité événementielle — public/images/event-crowd.jpg',
    },
  ]

  return (
    <section className="relative bg-ink-900 py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="reveal grid grid-cols-2 gap-4">
            {photos.map((photo) => (
              <div key={photo.file} className="relative h-48 overflow-hidden border border-white/10 sm:h-60">
                <PhotoSlot
                  src={imageSrc(photo.file)}
                  srcSet={imageSrcSet(photo.file, photo.width, photo.variants)}
                  sizes={PHOTO_SIZES}
                  width={photo.width}
                  height={photo.height}
                  alt={photo.alt}
                  label={photo.label}
                  className="relative h-full w-full"
                  imgClassName="h-full w-full transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="reveal" style={{ transitionDelay: '120ms' }}>
            <span className="section-eyebrow inline-flex items-center gap-2">
              <Users className="h-4 w-4" />
              {t.personnel.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
              {t.personnel.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">{t.personnel.subtitle}</p>

            <ul className="mt-8 flex flex-col gap-4">
              {t.personnel.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" strokeWidth={1.75} />
                  <span className="text-sm text-white/75 sm:text-base">{point}</span>
                </li>
              ))}
            </ul>

            <a href="#devis" className="btn-primary mt-9">
              {t.hero.ctaPrimary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
