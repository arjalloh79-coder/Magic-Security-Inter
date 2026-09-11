import { MapPin } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'

export function CoverageSection() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-ink-900 py-20 sm:py-28">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div ref={ref} className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <div className="reveal">
          <span className="section-eyebrow">{t.coverage.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
            {t.coverage.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            {t.coverage.subtitle}
          </p>
        </div>

        <div className="reveal relative mx-auto mt-14 flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72" style={{ transitionDelay: '120ms' }}>
          {/* concentric coverage rings */}
          <span className="absolute inset-0 rounded-full border border-accent-500/10" />
          <span className="absolute inset-[15%] rounded-full border border-accent-500/15" />
          <span className="absolute inset-[32%] rounded-full border border-accent-500/25" />

          {/* animated radar sweep rings */}
          <span className="absolute inset-[32%] animate-ping rounded-full border border-accent-500/40" style={{ animationDuration: '3s' }} />
          <span
            className="absolute inset-[15%] animate-ping rounded-full border border-accent-500/20"
            style={{ animationDuration: '3s', animationDelay: '0.6s' }}
          />

          {/* center marker */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-accent-500/40 bg-gradient-to-b from-accent-500/20 to-transparent shadow-accent">
            <MapPin className="h-6 w-6 text-accent-500" strokeWidth={1.75} />
          </div>
        </div>

        <div className="reveal mt-8" style={{ transitionDelay: '200ms' }}>
          <p className="font-display text-xl font-semibold uppercase tracking-wide text-white sm:text-2xl">
            {t.coverage.city}
          </p>
          <p className="mt-1 text-sm text-white/45">{t.coverage.district}</p>
        </div>
      </div>
    </section>
  )
}
