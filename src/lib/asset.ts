/**
 * Prefix a public-directory asset path with Vite's BASE_URL.
 * Works correctly both on localhost (base: '/') and on GitHub Pages (base: '/big-good/').
 *
 * Usage:  asset("/images/logo.svg")  →  "/big-good/images/logo.svg"  (production)
 *                                    →  "/images/logo.svg"            (dev)
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  return base.replace(/\/$/, "") + path;
}
