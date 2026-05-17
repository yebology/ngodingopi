/** Supported locales for the application */
export const LOCALES = ['en', 'id'] as const
export type Locale = (typeof LOCALES)[number]

/** Default locale when none is detected */
export const DEFAULT_LOCALE: Locale = 'en'

/** Navigation links */
export const NAV_LINKS = [
  { key: 'home', href: '' },
  { key: 'services', href: '#services' },
  { key: 'portfolio', href: '#portfolio' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
] as const

/** Social media links */
export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/6282264370932',
  instagram: 'https://instagram.com/ngodingopi',
  email: 'hello@ngodingopi.com',
} as const
