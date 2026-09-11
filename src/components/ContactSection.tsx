import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'
import { company, phoneToTelHref, phoneToWhatsAppHref, googleMapsSearchHref } from '../data/company'
import { MapGraphic } from './MapGraphic'

export function ContactSection() {
  const { t, lang } = useLanguage()
  const ref = useReveal<HTMLDivElement>()
  const mapsHref = googleMapsSearchHref('Coleah Domino, Matam, Conakry, Guinée')

  return (
    <section id="contact" className="relative bg-ink-950 py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">{t.contact.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">{t.contact.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal flex flex-col gap-4">
            <div className="card-surface flex items-start gap-4 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-accent-500/10 text-accent-500">
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/45">{t.contact.address}</p>
                <p className="mt-1 text-sm font-medium text-white sm:text-base">
                  {lang === 'fr' ? company.addressFr : company.addressEn}
                </p>
              </div>
            </div>

            <div className="card-surface flex items-start gap-4 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-accent-500/10 text-accent-500">
                <Phone className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/45">{t.contact.phone}</p>
                <div className="mt-1 flex flex-col gap-1">
                  {company.phones.map((phone) => (
                    <a
                      key={phone}
                      href={phoneToTelHref(phone)}
                      className="text-sm font-medium text-white transition-colors hover:text-accent-500 sm:text-base"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-surface flex items-start gap-4 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-accent-500/10 text-accent-500">
                <Mail className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/45">{t.contact.email}</p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 block truncate text-sm font-medium text-white transition-colors hover:text-accent-500 sm:text-base"
                >
                  {company.email}
                </a>
              </div>
            </div>

            <a
              href={phoneToWhatsAppHref(company.phones[0])}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-ink-950 transition-transform duration-300 hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2} />
              {t.contact.whatsappCta}
            </a>
          </div>

          <div
            className="reveal group relative min-h-[22rem] overflow-hidden border border-white/10 lg:min-h-full"
            style={{ transitionDelay: '120ms' }}
          >
            <MapGraphic
              className="h-full min-h-[22rem] w-full transition-transform duration-700 group-hover:scale-[1.03] lg:min-h-full"
              cityLabel={lang === 'fr' ? 'Conakry, Guinée' : 'Conakry, Guinea'}
              districtLabel="Coleah Domino · Matam"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/95 via-ink-950/50 to-transparent p-4 pt-10">
              <p className="text-xs font-medium uppercase tracking-wider text-white/70">{t.contact.mapNote}</p>
              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent-500 transition-colors hover:text-accent-400"
              >
                {t.contact.openInMaps}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
