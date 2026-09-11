import { ArrowRight, Phone, ShieldCheck, ChevronDown } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'
import { imageSrc, imageSrcSet } from '../lib/assets'
import { PhotoSlot } from './PhotoSlot'

export function Hero() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="accueil" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-950 pt-24 pb-16">
      <div className="absolute inset-0">
        <PhotoSlot
          src={imageSrc('hero-agents.jpg')}
          srcSet={imageSrcSet('hero-agents.jpg', 1170, [
            { suffix: '-480w', width: 480 },
            { suffix: '-800w', width: 800 },
          ])}
          sizes="100vw"
          width={1170}
          height={877}
          alt="Agents de sécurité MAGIC SECURITY INTER en mission"
          label="Photo hero : agents MSI sur le terrain — /public/images/hero-agents.jpg"
          className="relative h-full w-full"
          imgClassName="h-full w-full scale-105 animate-[fade-in_1.6s_ease] will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/85 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/30 to-transparent" />
        <div className="grid-overlay absolute inset-0 opacity-20 animate-grid-pan" />
      </div>

      <div ref={ref} className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <div className="reveal flex items-center gap-2" style={{ transitionDelay: '0.05s' }}>
            <ShieldCheck className="h-4 w-4 text-accent-500" />
            <span className="section-eyebrow">{t.hero.eyebrow}</span>
          </div>

          <h1
            className="reveal mt-6 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ transitionDelay: '0.15s' }}
          >
            {t.hero.title}
            <br />
            <span className="text-shimmer">{t.hero.titleAccent}</span>
          </h1>

          <p
            className="reveal mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
            style={{ transitionDelay: '0.25s' }}
          >
            {t.hero.subtitle}
          </p>

          <div className="reveal mt-9 flex flex-col gap-4 sm:flex-row" style={{ transitionDelay: '0.35s' }}>
            <a href="#devis" className="btn-primary group">
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-secondary group">
              <Phone className="h-4 w-4" />
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="reveal grid grid-cols-3 gap-3 lg:gap-4" style={{ transitionDelay: '0.45s' }}>
          {[
            { label: t.hero.stat1, value: t.hero.stat1v },
            { label: t.hero.stat2, value: t.hero.stat2v },
            { label: t.hero.stat3, value: t.hero.stat3v },
          ].map((stat) => (
            <div
              key={stat.label}
              className="card-surface flex flex-col gap-1 px-3 py-4 text-center transition-colors duration-300 hover:border-accent-500/40 sm:px-4"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-500 sm:text-xs">
                {stat.label}
              </span>
              <span className="text-sm font-bold text-white sm:text-base">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#a-propos"
        aria-label={t.hero.scroll}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/50 transition-colors hover:text-accent-500 sm:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">{t.hero.scroll}</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
