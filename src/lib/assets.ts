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
