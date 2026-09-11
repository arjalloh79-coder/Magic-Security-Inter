import { useEffect, useState } from 'react'
import { Menu, X, Phone, Globe } from 'lucide-react'
import { Logo } from './Logo'
import { useLanguage } from '../i18n/LanguageContext'
import { company, phoneToTelHref } from '../data/company'

const sections: { id: string; key: 'home' | 'about' | 'services' | 'equipment' | 'gallery' | 'why' | 'contact' }[] = [
  { id: 'accueil', key: 'home' },
  { id: 'a-propos', key: 'about' },
  { id: 'services', key: 'services' },
  { id: 'equipements', key: 'equipment' },
  { id: 'gallery', key: 'gallery' },
  { id: 'pourquoi-nous', key: 'why' },
  { id: 'contact', key: 'contact' },
]

export function Navbar() {
  const { t, lang, toggleLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink-950/90 shadow-lg shadow-black/30 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className={`border-b transition-colors duration-500 ${scrolled ? 'border-white/10' : 'border-transparent'}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a href="#accueil" className="flex shrink-0 items-center gap-3">
            <Logo className="h-11 w-11 shrink-0 sm:h-12 sm:w-12" />
            <span className="hidden flex-col whitespace-nowrap leading-tight sm:flex">
              <span className="font-display text-base font-bold tracking-wide text-white">MAGIC SECURITY</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent-500">Inter</span>
            </span>
          </a>

          <ul className="hidden items-center gap-4 xl:flex 2xl:gap-6">
            {sections.map((s) => (
              <li key={s.id} className="whitespace-nowrap">
                <a
                  href={`#${s.id}`}
                  className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-accent-500"
                >
                  {t.nav[s.key]}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <a
              href={phoneToTelHref(company.phones[0])}
              className="hidden items-center gap-2 whitespace-nowrap text-sm font-medium text-white/70 hover:text-accent-500 2xl:flex"
            >
              <Phone className="h-4 w-4 shrink-0" />
              {company.phones[0]}
            </a>
            <button
              onClick={toggleLang}
              aria-label="Changer de langue / Switch language"
              className="flex shrink-0 items-center gap-1.5 rounded-sm border border-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/80 transition-colors hover:border-accent-500/60 hover:text-accent-500"
            >
              <Globe className="h-3.5 w-3.5" />
              {lang === 'fr' ? 'FR' : 'EN'}
            </button>
            <a href="#devis" className="btn-primary !px-5 !py-2.5 !text-xs shrink-0 whitespace-nowrap">
              {t.nav.cta}
            </a>
          </div>

          <div className="flex items-center gap-3 xl:hidden">
            <button
              onClick={toggleLang}
              aria-label="Changer de langue / Switch language"
              className="flex items-center gap-1 rounded-sm border border-white/15 px-2.5 py-2 text-xs font-semibold uppercase text-white/80"
            >
              <Globe className="h-3.5 w-3.5" />
              {lang === 'fr' ? 'FR' : 'EN'}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t.common.closeMenu : t.common.openMenu}
              aria-expanded={open}
              className="relative rounded-sm border border-white/15 p-2 text-white transition-colors duration-300 hover:border-accent-500/60"
            >
              <span className="relative block h-5 w-5">
                <Menu
                  className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                    open ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                />
                <X
                  className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                    open ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`overflow-hidden bg-ink-950/98 backdrop-blur-md transition-[max-height,opacity] duration-500 xl:hidden ${
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-sm px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5 hover:text-accent-500"
              >
                {t.nav[s.key]}
              </a>
            </li>
          ))}
          <li className="mt-2 flex flex-col gap-3 border-t border-white/10 pt-4">
            <a
              href={phoneToTelHref(company.phones[0])}
              className="flex items-center gap-2 px-3 text-sm text-white/70"
            >
              <Phone className="h-4 w-4" /> {company.phones[0]}
            </a>
            <a href="#devis" onClick={() => setOpen(false)} className="btn-primary mx-3">
              {t.nav.cta}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
