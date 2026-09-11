/**
 * Resolves an image filename against the app's configured base URL instead
 * of hardcoding a leading "/". A hardcoded "/images/x.jpg" only works when
 * the built site is deployed at its host's domain root; it breaks under any
 * subpath deployment and on static preview hosts that disallow root-relative
 * asset paths. import.meta.env.BASE_URL always resolves correctly for the
 * current build target.
 */
export function imageSrc(filename: string): string {
  return `${import.meta.env.BASE_URL}images/${filename}`
}

/**
 * Builds a `srcset` string from a base filename plus its available narrower
 * variants (e.g. "hero-agents.jpg" + [{ suffix: '-480w', width: 480 }]) so
 * mobile viewports fetch a smaller file instead of the full-resolution
 * original. The base filename is always included as the largest candidate.
 */
export function imageSrcSet(filename: string, fullWidth: number, variants: { suffix: string; width: number }[] = []) {
  const dot = filename.lastIndexOf('.')
  const stem = filename.slice(0, dot)
  const ext = filename.slice(dot)
  const entries = variants.map((v) => `${imageSrc(`${stem}${v.suffix}${ext}`)} ${v.width}w`)
  entries.push(`${imageSrc(filename)} ${fullWidth}w`)
  return entries.join(', ')
}
