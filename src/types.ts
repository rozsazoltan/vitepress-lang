import type { DefaultTheme } from 'vitepress'

export type SupportedLocale = 'de' | 'en' | 'es' | 'fr' | 'hu'
export type SearchProvider = 'local' | 'algolia'

export interface LocaleMeta {
  label: string
  lang: string
  link?: string
}

export type ThemeConfig = Omit<DefaultTheme.Config, 'editLink'> & {
  editLink?: Omit<NonNullable<DefaultTheme.Config['editLink']>, 'pattern'>
}
export type LocalSearchTranslations = NonNullable<DefaultTheme.LocalSearchOptions['translations']>
export type AlgoliaSearchTranslations = NonNullable<DefaultTheme.AlgoliaSearchOptions['translations']>
type AskAiObject = Extract<
  NonNullable<DefaultTheme.AlgoliaSearchOptions['askAi']>,
  object
>;
export type AlgoliaAskAiSidePanelTranslations = AskAiObject['sidePanel'];

export interface VitePressLocalePack extends LocaleMeta {
  themeConfig: ThemeConfig
  search: {
    local: { translations: LocalSearchTranslations }
    algolia: { translations: AlgoliaSearchTranslations }
    askAi: { sidePanel: AlgoliaAskAiSidePanelTranslations }
  }
}

export type PlainObject = Record<string, unknown>

export type LocaleConfigOverride = PlainObject & {
  label?: string
  lang?: string
  link?: string
  themeConfig?: PlainObject
}

export interface DefineLangConfigOptions {
  searchProvider?: SearchProvider
  localeKey?: string
}
