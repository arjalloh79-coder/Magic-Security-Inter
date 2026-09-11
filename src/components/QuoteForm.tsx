import { useState, type FormEvent } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'
import { company } from '../data/company'

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

export function QuoteForm() {
  const { t, lang } = useLanguage()
  const ref = useReveal<HTMLDivElement>()
  const [form, setForm] = useState<FormState>(initialState)
  const [sent, setSent] = useState(false)

  const serviceOptions = t.services.items.map((item) => item.title)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

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

    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join('\n'),
    )}`

    window.location.href = mailto
    setSent(true)
  }

  const inputClass =
    'w-full rounded-sm border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent-500/70 focus:bg-white/[0.06]'
  const labelClass = 'mb-2 block text-xs font-semibold uppercase tracking-wider text-white/60'

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

        <form onSubmit={handleSubmit} className="reveal mt-12 card-surface p-6 sm:p-10" style={{ transitionDelay: '120ms' }}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="q-name">
                {t.quote.form.name} *
              </label>
              <input
                id="q-name"
                required
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder={t.quote.form.namePh}
                className={inputClass}
              />
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
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="q-phone">
                {t.quote.form.phone} *
              </label>
              <input
                id="q-phone"
                required
                type="tel"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                placeholder={t.quote.form.phonePh}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="q-email">
                {t.quote.form.email} *
              </label>
              <input
                id="q-email"
                required
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder={t.quote.form.emailPh}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="q-service">
                {t.quote.form.serviceType}
              </label>
              <select
                id="q-service"
                value={form.serviceType}
                onChange={(e) => update('serviceType', e.target.value)}
                className={`${inputClass} appearance-none`}
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
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <span className={labelClass}>{t.quote.form.coverage}</span>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: 'Jour', label: t.quote.form.coverageDay },
                  { key: 'Nuit', label: t.quote.form.coverageNight },
                  { key: 'Rotation', label: t.quote.form.coverageRotation },
                ].map((opt) => (
                  <button
                    type="button"
                    key={opt.key}
                    onClick={() => update('coverage', opt.key)}
                    className={`rounded-sm border px-3 py-3 text-xs font-semibold uppercase tracking-wider transition-colors sm:text-sm ${
                      form.coverage === opt.key
                        ? 'border-accent-500 bg-accent-500 text-white'
                        : 'border-white/15 bg-white/[0.03] text-white/70 hover:border-accent-500/50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
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
                className={`${inputClass} resize-none`}
              />
            </div>
          </div>

          <button type="submit" className="btn-primary group mt-8 w-full sm:w-auto">
            {t.quote.form.submit}
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {sent && (
            <p className="mt-4 flex items-center gap-2 text-sm text-accent-500">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              {t.quote.form.success}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
