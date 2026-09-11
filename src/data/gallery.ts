export type GalleryCategory = 'equipment' | 'intervention' | 'services'

export interface GalleryImage {
  file: string
  width: number
  height: number
  category: GalleryCategory
}

/**
 * Non-localized half of the gallery data — file, intrinsic size (for
 * srcset/width/height) and category. Localized title/alt text lives in
 * translations.ts (gallery.items), indexed in the same order.
 */
export const galleryImages: GalleryImage[] = [
  { file: 'hero-agents.jpg', width: 1170, height: 877, category: 'intervention' },
  { file: 'agents-mission.jpg', width: 720, height: 960, category: 'intervention' },
  { file: 'agents-vehicle.jpg', width: 960, height: 720, category: 'services' },
  { file: 'agents-team.jpg', width: 551, height: 1024, category: 'equipment' },
  { file: 'event-crowd.jpg', width: 720, height: 960, category: 'intervention' },
]
