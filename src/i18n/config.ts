export const locales = ['fr', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'fr'

export function localePath(path: string, locale: Locale): string {
  return locale === 'fr' ? path : `/en${path}`
}
