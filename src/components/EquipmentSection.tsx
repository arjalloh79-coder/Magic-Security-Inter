import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'
import { UniformIcon, CapIcon, BootIcon, BatonIcon, TorchIcon, WalkieTalkieIcon } from './icons/EquipmentIcons'

const icons = [UniformIcon, CapIcon, BootIcon, BatonIcon, TorchIcon, WalkieTalkieIcon]

export function EquipmentSection() {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="equipements" className="relative bg-ink-950 py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">{t.equipment.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
            {t.equipment.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">{t.equipment.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-5 grid-cols-2 lg:grid-cols-3">
          {t.equipment.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div
                key={item.title}
                className="reveal group card-surface flex flex-col items-center gap-4 p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-accent-500/50 sm:p-8"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent-500/25 bg-gradient-to-b from-accent-500/15 to-transparent text-accent-500 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-base font-semibold uppercase tracking-wide text-white sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/55 sm:text-sm">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
