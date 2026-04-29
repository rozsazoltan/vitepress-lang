import type { DefaultTheme } from 'vitepress'

export type SupportedLocale = 'de' | 'en' | 'es' | 'fr' | 'hu'

export type ThemeConfig = DefaultTheme.Config
export type LocalSearchTranslations = NonNullable<DefaultTheme.LocalSearchOptions['translations']>
export type AlgoliaSearchTranslations = NonNullable<DefaultTheme.AlgoliaSearchOptions['translations']>
type AskAiObject = Extract<
  NonNullable<DefaultTheme.AlgoliaSearchOptions['askAi']>,
  object
>;
export type AlgoliaAskAiSidePanelTranslations = AskAiObject['sidePanel'];

export type SearchConfig = {
  local: { translations: LocalSearchTranslations }
  algolia: { translations: AlgoliaSearchTranslations }
  askAi: { sidePanel: AlgoliaAskAiSidePanelTranslations }
}
export type VPi18nConfig = {
  label: string
  lang: string
  link?: string
  themeConfig: Partial<ThemeConfig>
  search: SearchConfig
}

export type PlainObject = Record<string, unknown>
