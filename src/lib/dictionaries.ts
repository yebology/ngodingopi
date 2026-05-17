import 'server-only'
import { LOCALES, type Locale } from './constants'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  id: () => import('@/dictionaries/id.json').then((module) => module.default),
}

export const hasLocale = (locale: string): locale is Locale =>
  LOCALES.includes(locale as Locale)

export const getDictionary = async (locale: Locale) => dictionaries[locale]()

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>
