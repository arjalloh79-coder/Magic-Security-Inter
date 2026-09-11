import { Quote, MapPin, Clock3, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'
import { company } from '../data/company'

export function AboutSection() {
  const { t, lang } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  const facts = [
    { icon: MapPin, label: lang === 'fr' ? 'Basée à' : 'Based in', value: 'Conakry, Guinée' },
    { icon: Clock3, label: lang === 'fr' ? 'Disponibilité' : 'Availability', value: t.hero.stat1v },
    { icon: ShieldCheck, label: lang === 'fr' ? 'Mission' : 'Mission', value: lang === 'fr' ? 'Protection privée' : 'Private protection' },
  ]

  return (
    <section id="a-propos" className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div ref={ref} className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <span className="section-eyebrow">
          {lang === 'fr' ? 'À propos de MAGIC SECURITY INTER' : 'About MAGIC SECURITY INTER'}
        </span>

        <div className="reveal relative mt-8">
          <Quote className="mx-auto h-9 w-9 text-gold-500/40" strokeWidth={1.5} />
          <p className="mx-auto mt-4 max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
            {lang === 'fr' ? company.bioFr : company.bioEn}
          </p>
        </div>

        <div className="reveal mt-14 grid gap-4 sm:grid-cols-3" style={{ transitionDelay: '120ms' }}>
          {facts.map((fact) => (
            <div key={fact.label} className="card-surface flex flex-col items-center gap-2 px-6 py-6">
              <fact.icon className="h-5 w-5 text-gold-500" strokeWidth={1.75} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">{fact.label}</span>
              <span className="font-display text-base font-semibold text-white">{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
