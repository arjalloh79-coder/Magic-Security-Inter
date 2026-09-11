export const company = {
  name: 'MAGIC SECURITY INTER',
  shortName: 'MSI',
  addressFr: 'Coleah Domino, c/ Matam, Conakry, Guinée',
  addressEn: 'Coleah Domino, c/ Matam, Conakry, Guinea',
  phones: ['+224 621 98 21 88', '+224 626 74 40 34'],
  email: 'Magicsecurityinter224@laposte.net',
  bioFr: "Une société qui s'engage pour vous pour la sécurité des personnes, des biens et services.",
  bioEn: 'A company committed to the security of people, property and services.',
  facebookUrl: 'https://www.facebook.com/profile.php?id=100063668527555',
  // Coleah / Matam commune, Conakry — approximate district center (Wikipedia: Matam, Guinea ~9.567°N, -13.633°W)
  mapCenter: { lat: 9.567, lon: -13.633 },
} as const

export const agency = {
  name: 'Al-Falah Marketing Agency',
  email: 'info@al-falahmarketing.com',
  url: 'https://al-falahmarketing.com',
} as const

export function phoneToTelHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, '')}`
}

export function phoneToWhatsAppHref(phone: string) {
  const digits = phone.replace(/[^\d]/g, '')
  return `https://wa.me/${digits}`
}

export function googleMapsSearchHref(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export function openStreetMapEmbedSrc(lat: number, lon: number, delta = 0.015) {
  const bbox = [lon - delta * 1.3, lat - delta, lon + delta * 1.3, lat + delta].join(',')
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`
}
