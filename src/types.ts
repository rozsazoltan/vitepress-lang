import type { DefaultTheme } from 'vitepress'

export type SupportedLocale = 'de' | 'en' | 'es' | 'fr' | 'hu'

export interface LocaleMeta {
  label: string
  lang: string
  link?: string
}

export type ThemeConfig = DefaultTheme.Config
export type SearchConfig = ThemeConfig['search']
export type SearchProvider = 'local' | 'algolia'
export type LocalSearchTranslations = NonNullable<DefaultTheme.LocalSearchOptions['translations']>
export type AlgoliaSearchTranslations = NonNullable<DefaultTheme.AlgoliaSearchOptions['translations']>
type AskAiObject = Extract<
  NonNullable<DefaultTheme.AlgoliaSearchOptions['askAi']>,
  object
>;
export type AlgoliaAskAiSidePanelTranslations = AskAiObject['sidePanel'];

export interface VitePressLocalePack extends LocaleMeta {
  themeConfig: Partial<ThemeConfig>
  search: {
    local: { translations: LocalSearchTranslations }
    algolia: { translations: AlgoliaSearchTranslations }
    askAi: { sidePanel: AlgoliaAskAiSidePanelTranslations }
  }
}

export type PlainObject = Record<string, unknown>
export type LocaleConfigOverride = {
  label?: string
  lang?: string
  link?: string
  themeConfig?: Partial<ThemeConfig>
}

export interface DefineLangConfigOptions {
  searchProvider?: SearchProvider
  localeKey?: string
}
