import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'
import { company, agency } from '../data/company'
import { Toast } from './Toast'

interface FormState {
  name: string
  company: string
  phone: string
  email: string
  serviceType: string
  agents: string
  coverage: string
  message: string
}

type FormErrors = Partial<Record<'name' | 'phone' | 'email', string>>

const initialState: FormState = {
  name: '',
  company: '',
  phone: '',
  email: '',
  serviceType: '',
  agents: '',
  coverage: 'Jour',
  message: '',
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+\d][\d\s().-]{5,}$/

export function QuoteForm() {
  const { t, lang } = useLanguage()
  const ref = useReveal<HTMLDivElement>()
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [toastOpen, setToastOpen] = useState(false)

  const serviceOptions = t.services.items.map((item) => item.title)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (key === 'name' || key === 'phone' || key === 'email') {
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    }
  }

  function validate(): FormErrors {
    const next: FormErrors = {}
    if (!form.name.trim()) next.name = t.quote.form.errorRequired
    if (!form.phone.trim()) next.phone = t.quote.form.errorRequired
    else if (!PHONE_RE.test(form.phone.trim())) next.phone = t.quote.form.errorPhone
    if (!form.email.trim()) next.email = t.quote.form.errorRequired
    else if (!EMAIL_RE.test(form.email.trim())) next.email = t.quote.form.errorEmail
    return next
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const validation = validate()
    setErrors(validation)
    if (Object.keys(validation).length > 0) {
      const firstKey = Object.keys(validation)[0]
      document.getElementById(`q-${firstKey}`)?.focus()
      return
    }

    const subject = lang === 'fr' ? `Demande de devis — ${form.name || 'Client'}` : `Quote request — ${form.name || 'Client'}`
    const bodyLines = [
      `${t.quote.form.name}: ${form.name}`,
      `${t.quote.form.company}: ${form.company}`,
      `${t.quote.form.phone}: ${form.phone}`,
      `${t.quote.form.email}: ${form.email}`,
      `${t.quote.form.serviceType}: ${form.serviceType}`,
      `${t.quote.form.agents}: ${form.agents}`,
      `${t.quote.form.coverage}: ${form.coverage}`,
      '',
      `${t.quote.form.message}:`,
      form.message,
    ]

    const mailto = `mailto:${company.email}?cc=${encodeURIComponent(agency.email)}&subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`

    window.location.href = mailto
    setToastOpen(true)
    setForm(initialState)
  }

  const baseInput =
    'w-full rounded-sm border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:bg-white/[0.06]'
  const okBorder = 'border-white/15 focus:border-accent-500/70'
  const errBorder = 'border-accent-500 focus:border-accent-500'
  const labelClass = 'mb-2 block text-xs font-semibold uppercase tracking-wider text-white/60'
  const errorText = 'mt-1.5 text-xs font-medium text-accent-500'

  function fieldClass(key: keyof FormErrors) {
    return `${baseInput} ${errors[key] ? errBorder : okBorder}`
  }

  return (
    <section id="devis" className="relative overflow-hidden bg-ink-900 py-20 sm:py-28">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div ref={ref} className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">{t.quote.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl">
            {t.quote.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">{t.quote.subtitle}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="reveal mt-12 card-surface p-6 sm:p-10"
          style={{ transitionDelay: '120ms' }}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="q-name">
                {t.quote.form.name} *
              </label>
              <input
                id="q-name"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder={t.quote.form.namePh}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'q-name-error' : undefined}
                className={fieldClass('name')}
              />
              {errors.name && (
                <p id="q-name-error" className={errorText}>
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label className={labelClass} htmlFor="q-company">
                {t.quote.form.company}
              </label>
              <input
                id="q-company"
                value={form.company}
                onChange={(e) => update('company', e.target.value)}
                placeholder={t.quote.form.companyPh}
                className={`${baseInput} ${okBorder}`}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="q-phone">
                {t.quote.form.phone} *
              </label>
              <input
                id="q-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                placeholder={t.quote.form.phonePh}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'q-phone-error' : undefined}
                className={fieldClass('phone')}
              />
              {errors.phone && (
                <p id="q-phone-error" className={errorText}>
                  {errors.phone}
                </p>
              )}
            </div>
            <div>
              <label className={labelClass} htmlFor="q-email">
                {t.quote.form.email} *
              </label>
              <input
                id="q-email"
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder={t.quote.form.emailPh}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'q-email-error' : undefined}
                className={fieldClass('email')}
              />
              {errors.email && (
                <p id="q-email-error" className={errorText}>
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label className={labelClass} htmlFor="q-service">
                {t.quote.form.serviceType}
              </label>
              <select
                id="q-service"
                value={form.serviceType}
                onChange={(e) => update('serviceType', e.target.value)}
                className={`${baseInput} ${okBorder} appearance-none`}
              >
                <option value="" className="bg-ink-900">
                  {t.quote.form.serviceTypePh}
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-ink-900">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="q-agents">
                {t.quote.form.agents}
              </label>
              <input
                id="q-agents"
                type="number"
                min={1}
                value={form.agents}
                onChange={(e) => update('agents', e.target.value)}
                placeholder={t.quote.form.agentsPh}
                className={`${baseInput} ${okBorder}`}
              />
            </div>

            <div className="sm:col-span-2">
              <span className={labelClass}>{t.quote.form.coverage}</span>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: 'Jour', label: t.quote.form.coverageDay },
                  { key: 'Nuit', label: t.quote.form.coverageNight },
                  { key: 'Rotation', label: t.quote.form.coverageRotation },
                ].map((opt) => {
                  const active = form.coverage === opt.key
                  return (
                    <button
                      type="button"
                      key={opt.key}
                      onClick={() => update('coverage', opt.key)}
                      aria-pressed={active}
                      className={`rounded-sm border px-3 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-200 sm:text-sm ${
                        active
                          ? 'border-accent-500 bg-accent-500 text-white shadow-accent'
                          : 'border-white/15 bg-white/[0.03] text-white/70 hover:border-accent-500/50 hover:text-white'
                      }`}
                    >
                      {opt.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="q-message">
                {t.quote.form.message}
              </label>
              <textarea
                id="q-message"
                rows={4}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder={t.quote.form.messagePh}
                className={`${baseInput} ${okBorder} resize-none`}
              />
            </div>
          </div>

          <button type="submit" className="btn-primary group mt-8 w-full sm:w-auto">
            {t.quote.form.submit}
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </form>
      </div>

      <Toast
        message={t.quote.form.success}
        show={toastOpen}
        onClose={() => setToastOpen(false)}
        closeLabel={t.common.close}
      />
    </section>
  )
}
