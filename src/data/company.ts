export const company = {
  name: 'MAGIC SECURITY INTER',
  shortName: 'MSI',
  addressFr: 'Coleah Domino, c/ Matam, Conakry, Guinée',
  addressEn: 'Coleah Domino, c/ Matam, Conakry, Guinea',
  phones: ['+224 621 98 21 88', '+224 626 74 40 34'],
  email: 'Magicsecurityinter224@laposte.net',
  bioFr: "Une société qui s'engage pour vous pour la sécurité des personnes, des biens et services.",
  bioEn: 'A company committed to the security of people, property and services.',
} as const

export function phoneToTelHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, '')}`
}

export function phoneToWhatsAppHref(phone: string) {
  const digits = phone.replace(/[^\d]/g, '')
  return `https://wa.me/${digits}`
}
