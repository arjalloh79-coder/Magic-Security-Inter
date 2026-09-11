import { MessageCircle } from 'lucide-react'
import { company, phoneToWhatsAppHref } from '../data/company'

export function WhatsAppButton() {
  return (
    <a
      href={phoneToWhatsAppHref(company.phones[0])}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-20 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-110 sm:bottom-6"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} fill="currentColor" />
    </a>
  )
}
