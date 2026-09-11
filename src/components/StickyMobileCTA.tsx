import { useEffect, useState } from 'react'
import { ShieldCheck, Phone } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { company, phoneToTelHref } from '../data/company'

export function StickyMobileCTA() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-px border-t border-gold-500/30 bg-ink-950/95 backdrop-blur-md transition-transform duration-500 sm:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href={phoneToTelHref(company.phones[0])}
        className="flex flex-1 items-center justify-center gap-2 bg-white/5 py-4 text-xs font-semibold uppercase tracking-wider text-white"
      >
        <Phone className="h-4 w-4" />
        {company.phones[0]}
      </a>
      <a
        href="#devis"
        className="flex flex-1 items-center justify-center gap-2 bg-gold-500 py-4 text-xs font-semibold uppercase tracking-wider text-ink-950"
      >
        <ShieldCheck className="h-4 w-4" />
        {t.stickyCta}
      </a>
    </div>
  )
}
