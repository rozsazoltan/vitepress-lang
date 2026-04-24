import { localePacks } from '../locales'
import type {
  DefineLangConfigOptions,
  LocaleConfigOverride,
  PlainObject,
  SearchProvider,
  SupportedLocale
} from '../types'

function isPlainObject(value: unknown): value is PlainObject {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export function deepMerge<T extends PlainObject>(base: T, override?: PlainObject): T {
  if (!override) return { ...base }

  const output: PlainObject = { ...base }

  for (const [key, value] of Object.entries(override)) {
    const current = output[key]

    if (isPlainObject(current) && isPlainObject(value)) {
      output[key] = deepMerge(current, value)
      continue
    }

    output[key] = value
  }

  return output as T
}

function createSearchConfig(locale: SupportedLocale, localeKey: string, provider: SearchProvider): PlainObject {
  const pack = localePacks[locale]

  if (provider === 'algolia') {
    return {
      provider: 'algolia',
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

  return {
    provider: 'local',
    options: {
      locales: {
        [localeKey]: pack.search.local
      }
    }
  }
}

export function defineLangConfig(
  locale: SupportedLocale,
  override: LocaleConfigOverride = {},
  options: DefineLangConfigOptions = {}
) {
  const pack = localePacks[locale]
  const localeKey = options.localeKey ?? locale
  const searchProvider = options.searchProvider ?? 'local'

  const baseConfig = {
    label: pack.label,
    lang: pack.lang,
    link: pack.link,
    themeConfig: {
      ...pack.themeConfig,
      search: createSearchConfig(locale, localeKey, searchProvider)
    }
  }

  return deepMerge(baseConfig, override)
}
