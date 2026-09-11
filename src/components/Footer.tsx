import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Logo } from './Logo'
import { useLanguage } from '../i18n/LanguageContext'
import { company, agency, phoneToTelHref } from '../data/company'

const links: { id: string; key: 'home' | 'about' | 'services' | 'equipment' | 'gallery' | 'why' | 'contact' }[] = [
  { id: 'accueil', key: 'home' },
  { id: 'a-propos', key: 'about' },
  { id: 'services', key: 'services' },
  { id: 'equipements', key: 'equipment' },
  { id: 'gallery', key: 'gallery' },
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
          <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
            <p className="text-xs text-white/40">
              © 2026 {company.name}. {t.footer.rights}
            </p>
            <p className="text-xs text-white/30">
              {t.footer.credit}{' '}
              <a
                href={agency.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-white/50 transition-colors hover:text-accent-500"
              >
                {t.footer.creditAgency}
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={company.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all duration-300 hover:border-accent-500/60 hover:text-accent-500 hover:scale-110"
            >
              <Facebook className="h-4 w-4" strokeWidth={1.75} />
            </a>
            {[
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Linkedin, label: 'LinkedIn' },
            ].map(({ Icon, label }) => (
              <span
                key={label}
                aria-label={`${label} — ${lang === 'fr' ? 'bientôt disponible' : 'coming soon'}`}
                title={lang === 'fr' ? 'Réseau social (à venir)' : 'Social network (coming soon)'}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/25 transition-all duration-300 hover:border-white/20 hover:text-white/40"
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
