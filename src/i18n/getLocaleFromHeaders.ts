import { headers } from 'next/headers'
import type { Locale } from './config'
import { getDictionary } from './getDictionary'

export async function getLocaleFromHeaders(): Promise<Locale> {
  const headersList = await headers()
  return (headersList.get('x-locale') || 'fr') as Locale
}

export async function getLocaleDictionary() {
  const locale = await getLocaleFromHeaders()
  const dict = await getDictionary(locale)
  return { locale, dict }
}
