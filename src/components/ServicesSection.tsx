import { Sun, Moon, RefreshCw, Building2, Warehouse, PackageOpen, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'

const icons = [Sun, Moon, RefreshCw, Building2, Warehouse, PackageOpen]

export function ServicesSection() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="services" className="relative bg-ink-950 py-20 sm:py-28">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="section-eyebrow">{t.services.eyebrow}</span>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
              {t.services.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">{t.services.subtitle}</p>
          </div>
          <a href="#devis" className="hidden shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-500 hover:text-accent-400 sm:inline-flex">
            {t.services.cta}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div
                key={item.title}
                className="reveal group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition-all duration-500 hover:border-accent-500/50"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div>
                  <div className="flex items-start justify-between">
                    <Icon className="h-8 w-8 text-accent-500" strokeWidth={1.5} />
                    <span className="font-display text-3xl font-bold text-white/10 transition-colors duration-500 group-hover:text-accent-500/20">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold uppercase tracking-wide text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{item.text}</p>
                </div>
                <span className="mt-6 h-px w-0 bg-accent-500 transition-all duration-500 group-hover:w-full" />
              </div>
            )
          })}
        </div>

        <a
          href="#devis"
          className="reveal mt-10 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-500 hover:text-accent-400 sm:hidden"
        >
          {t.services.cta}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
