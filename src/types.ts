import type { DefaultTheme, UserConfig } from 'vitepress'

export type SupportedLocale = 'de' | 'en' | 'es' | 'fr' | 'hu'

export type ThemeConfig = DefaultTheme.Config

export type LocalSearchTranslations =
  NonNullable<DefaultTheme.LocalSearchOptions['translations']>

export type AlgoliaSearchTranslations =
  NonNullable<DefaultTheme.AlgoliaSearchOptions['translations']>

type AskAiObject = Extract<
  NonNullable<DefaultTheme.AlgoliaSearchOptions['askAi']>,
  object
>

export type AlgoliaAskAiSidePanelTranslations =
  AskAiObject['sidePanel']

export type SearchConfig = {
  local: { translations: LocalSearchTranslations }
  algolia: { translations: AlgoliaSearchTranslations }
  askAi: { sidePanel: AlgoliaAskAiSidePanelTranslations }
}

type VitePressLocaleConfig =
  NonNullable<UserConfig<ThemeConfig>['locales']>[string]

export type VPi18nConfig =
  Omit<VitePressLocaleConfig, 'label' | 'lang' | 'link' | 'themeConfig'> & {
    label: string
    lang: string
    link?: string
    themeConfig: Partial<ThemeConfig>
    search: SearchConfig
  }

export type VPi18nConfigOverride = Partial<VPi18nConfig>

export type PlainObject = Record<string, unknown>
