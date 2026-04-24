import { de, hu } from '../locales'
import type { SupportedLocale, VitePressLocalePack } from '../types'

export const localePacks: Record<SupportedLocale, VitePressLocalePack> = {
  de,
  hu
}

export function getLocalePack(locale: SupportedLocale): VitePressLocalePack {
  return localePacks[locale]
}

export function createRootLocaleConfig(locale: SupportedLocale) {
  const pack = getLocalePack(locale)

  return {
    ...pack.themeConfig,
    search: {
      provider: 'local' as const,
      options: {
        locales: {
          root: pack.search.local
        }
      }
    }
  }
}

export function createNamedLocaleConfig(locale: SupportedLocale, localeKey: string) {
  const pack = getLocalePack(locale)

  return {
    ...pack.themeConfig,
    search: {
      provider: 'local' as const,
      options: {
        locales: {
          [localeKey]: pack.search.local
        }
      }
    }
  }
}

export function createAlgoliaRootLocaleConfig(locale: SupportedLocale) {
  const pack = getLocalePack(locale)

  return {
    ...pack.themeConfig,
    search: {
      provider: 'algolia' as const,
      options: {
        locales: {
          root: {
            ...pack.search.algolia,
            askAi: pack.search.askAi
          }
        }
      }
    }
  }
}

export function createAlgoliaNamedLocaleConfig(locale: SupportedLocale, localeKey: string) {
  const pack = getLocalePack(locale)

  return {
    ...pack.themeConfig,
    search: {
      provider: 'algolia' as const,
      options: {
        locales: {
          [localeKey]: {
            ...pack.search.algolia,
            askAi: pack.search.askAi
          }
        }
      }
    }
  }
}
