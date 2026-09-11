import { ShieldCheck, Clock, PackageCheck, HeartHandshake } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'

const icons = [ShieldCheck, Clock, PackageCheck, HeartHandshake]

export function TrustSection() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="pourquoi-nous" className="relative bg-ink-900 py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">{t.trust.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
            {t.trust.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">{t.trust.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.trust.cards.map((card, i) => {
            const Icon = icons[i]
            return (
              <div
                key={card.title}
                className="reveal card-surface group relative overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-500/50 hover:shadow-accent"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-accent-500/10 blur-2xl transition-all duration-500 group-hover:bg-accent-500/20" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-sm border border-accent-500/30 bg-accent-500/10 text-accent-500 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                  <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-semibold uppercase tracking-wide text-white">
                  {card.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/60">{card.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
