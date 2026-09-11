import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'
import { company, phoneToTelHref, phoneToWhatsAppHref } from '../data/company'

export function ContactSection() {
  const { t, lang } = useLanguage()
  const ref = useReveal<HTMLDivElement>()
  const mapQuery = encodeURIComponent('Coleah Domino, Matam, Conakry, Guinée')

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
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-gold-500/10 text-gold-500">
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
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-gold-500/10 text-gold-500">
                <Phone className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/45">{t.contact.phone}</p>
                <div className="mt-1 flex flex-col gap-1">
                  {company.phones.map((phone) => (
                    <a
                      key={phone}
                      href={phoneToTelHref(phone)}
                      className="text-sm font-medium text-white transition-colors hover:text-gold-500 sm:text-base"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-surface flex items-start gap-4 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-gold-500/10 text-gold-500">
                <Mail className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/45">{t.contact.email}</p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 block truncate text-sm font-medium text-white transition-colors hover:text-gold-500 sm:text-base"
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

          <div className="reveal relative min-h-[22rem] overflow-hidden border border-white/10 lg:min-h-full" style={{ transitionDelay: '120ms' }}>
            <iframe
              title="MAGIC SECURITY INTER — Coleah Domino, Matam, Conakry"
              src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
              className="h-full min-h-[22rem] w-full grayscale invert-[0.92] contrast-[1.05] lg:min-h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 to-transparent p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-white/70">{t.contact.mapNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
