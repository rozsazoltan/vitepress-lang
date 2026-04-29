import { localePacks } from '../locales'
import type {
  PlainObject,
  SearchConfig,
  SupportedLocale,
  VPi18nConfig,
  VPi18nConfigOverride,
} from '../types'

const langConfigSymbol = Symbol('vitepress-lang:config')
const undefinedSentinel = 'UNDEFINED'

type SearchProvider = 'local' | 'algolia'

type LangConfigMeta = {
  locale: SupportedLocale
  search: SearchConfig
}

type LangLocaleConfig = Omit<VPi18nConfig, 'search'> & {
  [langConfigSymbol]?: LangConfigMeta
}

type SearchLikeConfig = PlainObject & {
  provider?: SearchProvider | string
  options?: PlainObject
}

type ThemeLikeConfig = PlainObject & {
  search?: SearchLikeConfig
}

type VitePressLikeConfig = PlainObject & {
  themeConfig?: ThemeLikeConfig
  locales?: Record<string, unknown>
}

type WithLangSearchOptions = {
  searchProvider?: SearchProvider
  rootLocale?: SupportedLocale
  localeMap?: Partial<Record<string, SupportedLocale>>
}

function isPlainObject(value: unknown): value is PlainObject {
  return Object.prototype.toString.call(value) === '[object Object]'
}

function deepMerge<T extends PlainObject>(
  base: T,
  override?: PlainObject,
): T {
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

function normalizeDefaults(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(normalizeDefaults)
  }

  if (isPlainObject(value)) {
    const output: PlainObject = {}

    for (const [key, childValue] of Object.entries(value)) {
      const normalized = normalizeDefaults(childValue)

      if (normalized === undefined || normalized === undefinedSentinel) {
        continue
      }

      if (isPlainObject(normalized) && Object.keys(normalized).length === 0) {
        continue
      }

      output[key] = normalized
    }

    return output
  }

  if (value === undefinedSentinel) {
    return undefined
  }

  return value
}

function ensurePlainObject(
  parent: PlainObject,
  key: string,
): PlainObject {
  const current = parent[key]

  if (isPlainObject(current)) {
    return current
  }

  const next: PlainObject = {}
  parent[key] = next

  return next
}

function resolveLocale(
  localeKey: string,
  config: unknown,
  options: WithLangSearchOptions,
): SupportedLocale | undefined {
  const meta = isPlainObject(config)
    ? (config as LangLocaleConfig)[langConfigSymbol]
    : undefined

  if (meta?.locale) {
    return meta.locale
  }

  if (options.localeMap?.[localeKey]) {
    return options.localeMap[localeKey]
  }

  if (localeKey === 'root') {
    return options.rootLocale ?? 'en'
  }

  if (localeKey in localePacks) {
    return localeKey as SupportedLocale
  }

  return undefined
}

function resolveSearchProvider(
  config: VitePressLikeConfig,
  options: WithLangSearchOptions,
): SearchProvider {
  if (options.searchProvider) {
    return options.searchProvider
  }

  const provider = config.themeConfig?.search?.provider

  if (provider === 'algolia') {
    return 'algolia'
  }

  return 'local'
}

function applySearchLocale(
  searchConfig: PlainObject,
  localeKey: string,
  provider: SearchProvider,
  langSearch: SearchConfig,
): void {
  const searchOptions = ensurePlainObject(searchConfig, 'options')
  const searchLocales = ensurePlainObject(searchOptions, 'locales')

  const existingLocaleConfig = isPlainObject(searchLocales[localeKey])
    ? searchLocales[localeKey]
    : {}

  const generatedLocaleConfig =
    provider === 'local'
      ? {
          translations: langSearch.local.translations,
        }
      : {
          translations: langSearch.algolia.translations,
          askAi: {
            sidePanel: langSearch.askAi.sidePanel,
          },
        }

  searchLocales[localeKey] = deepMerge(
    generatedLocaleConfig as PlainObject,
    existingLocaleConfig as PlainObject,
  )
}

export function defineLangConfig(
  locale: SupportedLocale,
  override: VPi18nConfigOverride = {},
): LangLocaleConfig {
  const config = localePacks[locale]

  const { search, ...localeConfig } = config
  const { search: searchOverride, ...localeOverride } = override

  const mergedLocaleConfig = deepMerge(
    localeConfig as unknown as PlainObject,
    localeOverride as unknown as PlainObject,
  ) as LangLocaleConfig

  const mergedSearch = deepMerge(
    search as unknown as PlainObject,
    searchOverride as unknown as PlainObject | undefined,
  ) as unknown as SearchConfig

  const normalizedLocaleConfig = normalizeDefaults(
    mergedLocaleConfig,
  ) as LangLocaleConfig

  Object.defineProperty(normalizedLocaleConfig, langConfigSymbol, {
    enumerable: false,
    value: {
      locale,
      search: mergedSearch,
    } satisfies LangConfigMeta,
  })

  return normalizedLocaleConfig
}

export function withLangSearch<T extends VitePressLikeConfig>(
  config: T,
  options: WithLangSearchOptions = {},
): T {
  const provider = resolveSearchProvider(config, options)

  const themeConfig = ensurePlainObject(config, 'themeConfig')
  const searchConfig = ensurePlainObject(themeConfig, 'search')

  searchConfig.provider = provider

  for (const [localeKey, localeConfig] of Object.entries(config.locales ?? {})) {
    const locale = resolveLocale(localeKey, localeConfig, options)

    if (!locale) {
      continue
    }

    const meta = isPlainObject(localeConfig)
      ? (localeConfig as LangLocaleConfig)[langConfigSymbol]
      : undefined

    const langSearch = meta?.search ?? localePacks[locale].search

    applySearchLocale(searchConfig, localeKey, provider, langSearch)
  }

  return normalizeDefaults(config) as T
}
