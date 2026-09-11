import { useLanguage } from '../i18n/LanguageContext'

const itemsFr = [
  'Sécurité de jour',
  'Sécurité de nuit',
  'Service en rotation',
  'Sécurité des entreprises',
  'Protection des biens',
  'Équipements de sécurité',
]

const itemsEn = [
  'Daytime security',
  'Nighttime security',
  'Rotation service',
  'Business security',
  'Property protection',
  'Security equipment',
]

export function MarqueeBar() {
  const { lang } = useLanguage()
  const items = lang === 'fr' ? itemsFr : itemsEn
  const track = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-black/30 bg-accent-500 py-2.5">
      <div className="flex w-max animate-[marquee_26s_linear_infinite] gap-8 whitespace-nowrap">
        {[...track, ...track].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-white"
          >
            {item} <span className="text-white/50">·</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
