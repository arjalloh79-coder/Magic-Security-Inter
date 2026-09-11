import { MapPin, Phone, Mail } from 'lucide-react'
import { Logo } from './Logo'
import { useLanguage } from '../i18n/LanguageContext'
import { company, phoneToTelHref } from '../data/company'

const links: { id: string; key: 'home' | 'about' | 'services' | 'equipment' | 'why' | 'contact' }[] = [
  { id: 'accueil', key: 'home' },
  { id: 'a-propos', key: 'about' },
  { id: 'services', key: 'services' },
  { id: 'equipements', key: 'equipment' },
  { id: 'pourquoi-nous', key: 'why' },
  { id: 'contact', key: 'contact' },
]

export function Footer() {
  const { t, lang } = useLanguage()

  return (
    <footer className="relative border-t border-white/10 bg-ink-950 pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Logo className="h-11 w-11" />
              <span className="font-display text-lg font-bold uppercase tracking-wide text-white">
                {company.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              {lang === 'fr' ? t.footer.bio : t.footer.bio}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-500">{t.footer.quickLinks}</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-sm text-white/60 transition-colors hover:text-accent-500">
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-500">{t.footer.contact}</h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500/70" />
                <span>{lang === 'fr' ? company.addressFr : company.addressEn}</span>
              </li>
              {company.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-2.5 text-sm text-white/60">
                  <Phone className="h-4 w-4 shrink-0 text-accent-500/70" />
                  <a href={phoneToTelHref(phone)} className="transition-colors hover:text-accent-500">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0 text-accent-500/70" />
                <a href={`mailto:${company.email}`} className="break-all transition-colors hover:text-accent-500">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © 2026 {company.name}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-3 text-white/30">
            {['facebook', 'instagram', 'linkedin'].map((platform) => (
              <span
                key={platform}
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[10px] uppercase"
                title={lang === 'fr' ? 'Réseau social (à venir)' : 'Social network (coming soon)'}
              >
                {platform[0].toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
