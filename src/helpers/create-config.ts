import { de, hu } from '../locales'
import type {
  DefineLangOptions,
  SearchProvider,
  SupportedLocale,
  VitePressGeneratedLocaleConfig,
  VitePressLocalePack
} from '../types'

export const localePacks: Record<SupportedLocale, VitePressLocalePack> = {
  de,
  hu
}

export const supportedLocales = Object.keys(localePacks) as SupportedLocale[]

export function getLocalePack(locale: SupportedLocale): VitePressLocalePack {
  return localePacks[locale]
}

function createSearchConfig(pack: VitePressLocalePack, key: string, provider: SearchProvider) {
  if (provider === 'algolia') {
    return {
      provider,
      options: {
        locales: {
          [key]: {
            ...pack.search.algolia,
            askAi: pack.search.askAi
          }
        }
      }
    }
  }

  return {
    provider,
    options: {
      locales: {
        [key]: pack.search.local
      }
    }
  }
}

export function defineLang(
  locale: SupportedLocale,
  options: DefineLangOptions = {}
): Record<string, VitePressGeneratedLocaleConfig> {
  const pack = getLocalePack(locale)
  const key = options.key ?? locale
  const provider = options.searchProvider ?? 'local'

  return {
    [key]: {
      label: options.label ?? pack.label,
      lang: options.lang ?? pack.lang,
      link: options.link ?? pack.link,
      themeConfig: {
        ...pack.themeConfig,
        search: createSearchConfig(pack, key, provider)
      }
    }
  }
}

export function defineRootLang(
  locale: SupportedLocale,
  options: Omit<DefineLangOptions, 'key' | 'link'> = {}
): Record<'root', VitePressGeneratedLocaleConfig> {
  const pack = getLocalePack(locale)
  const provider = options.searchProvider ?? 'local'

  return {
    root: {
      label: options.label ?? pack.label,
      lang: options.lang ?? pack.lang,
      themeConfig: {
        ...pack.themeConfig,
        search: createSearchConfig(pack, 'root', provider)
      }
    }
  }
}

export function defineLangs(
  locales: SupportedLocale[],
  options: DefineLangOptions = {}
): Record<string, VitePressGeneratedLocaleConfig> {
  return Object.assign({}, ...locales.map((locale) => defineLang(locale, options)))
}

export function defineAllLangs(options: DefineLangOptions = {}): Record<string, VitePressGeneratedLocaleConfig> {
  return defineLangs(supportedLocales, options)
}
