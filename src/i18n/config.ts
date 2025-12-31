export const locales = ['es', 'fr', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'es'

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  fr: 'Français',
  en: 'English',
}

export const localeFlags: Record<Locale, string> = {
  es: '🇪🇸',
  fr: '🇫🇷',
  en: '🇬🇧',
}

