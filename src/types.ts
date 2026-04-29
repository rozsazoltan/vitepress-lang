import type { DefaultTheme, UserConfig } from 'vitepress'

export type SupportedLocale =
  | 'en'
  | 'es'
  | 'fa'
  | 'ja'
  | 'ko'
  | 'pt'
  | 'ru'
  | 'zh'
  | 'de'
  | 'hu'
  | 'fr'
  | 'ro'
  | 'sr'
  | 'sk'
  | 'cs'

export type ThemeConfig = DefaultTheme.Config

type PlainFunction = (...args: never[]) => unknown

type StrictTranslationObject<T> = {
  [Key in keyof Required<NonNullable<T>>]-?: StrictTranslationValue<
    Required<NonNullable<T>>[Key]
  >
}

type StrictTranslationValue<T> =
  NonNullable<T> extends PlainFunction
    ? NonNullable<T> | undefined
    : NonNullable<T> extends readonly unknown[]
      ? NonNullable<T> | undefined
      : NonNullable<T> extends object
        ? StrictTranslationObject<NonNullable<T>>
        : NonNullable<T> | undefined

type RequiredTranslationPick<T, Keys extends PropertyKey> = {
  [Key in Extract<keyof Required<NonNullable<T>>, Keys>]-?: StrictTranslationValue<
    Required<NonNullable<T>>[Key]
  >
}

type OptionalRemaining<T, Keys extends PropertyKey> = Partial<
  Omit<NonNullable<T>, Extract<keyof NonNullable<T>, Keys>>
>

export type DeepPartial<T> =
  T extends PlainFunction
    ? T
    : T extends readonly (infer Item)[]
      ? readonly DeepPartial<Item>[]
      : T extends object
        ? {
            [Key in keyof T]?: DeepPartial<T[Key]>
          }
        : T

type ThemeTextTranslationKeys =
  | 'langMenuLabel'
  | 'returnToTopLabel'
  | 'sidebarMenuLabel'
  | 'darkModeSwitchLabel'
  | 'lightModeSwitchTitle'
  | 'darkModeSwitchTitle'
  | 'skipToContentLabel'

type ThemeTextTranslations = RequiredTranslationPick<
  ThemeConfig,
  ThemeTextTranslationKeys
>

type NotFoundConfig = NonNullable<ThemeConfig['notFound']>

type NotFoundTranslationKeys =
  | 'title'
  | 'quote'
  | 'linkLabel'
  | 'linkText'

type NotFoundTranslations =
  RequiredTranslationPick<NotFoundConfig, NotFoundTranslationKeys> &
  OptionalRemaining<NotFoundConfig, NotFoundTranslationKeys>

type FooterConfig = NonNullable<ThemeConfig['footer']>

type FooterTranslationKeys = 'message'

type FooterTranslations =
  RequiredTranslationPick<FooterConfig, FooterTranslationKeys> &
  OptionalRemaining<FooterConfig, FooterTranslationKeys>

type DocFooterConfig = NonNullable<ThemeConfig['docFooter']>

type DocFooterTranslationKeys =
  | 'prev'
  | 'next'

type DocFooterTranslations =
  RequiredTranslationPick<DocFooterConfig, DocFooterTranslationKeys> &
  OptionalRemaining<DocFooterConfig, DocFooterTranslationKeys>

type OutlineConfig = Extract<NonNullable<ThemeConfig['outline']>, object>

type OutlineTranslationKeys = 'label'

type OutlineTranslations =
  RequiredTranslationPick<OutlineConfig, OutlineTranslationKeys> &
  OptionalRemaining<OutlineConfig, OutlineTranslationKeys>

type EditLinkConfig = NonNullable<ThemeConfig['editLink']>

type EditLinkTranslationKeys = 'text'

type EditLinkTranslations =
  RequiredTranslationPick<EditLinkConfig, EditLinkTranslationKeys> &
  OptionalRemaining<EditLinkConfig, EditLinkTranslationKeys>

type LastUpdatedConfig = NonNullable<ThemeConfig['lastUpdated']>

type LastUpdatedTranslationKeys = 'text'

type LastUpdatedTranslations =
  RequiredTranslationPick<LastUpdatedConfig, LastUpdatedTranslationKeys> &
  OptionalRemaining<LastUpdatedConfig, LastUpdatedTranslationKeys>

export type ThemeTranslations = ThemeTextTranslations & {
  notFound: NotFoundTranslations
  footer: FooterTranslations
  docFooter: DocFooterTranslations
  outline: OutlineTranslations
  editLink: EditLinkTranslations
  lastUpdated: LastUpdatedTranslations
}

export type LocalSearchTranslations = StrictTranslationObject<
  NonNullable<DefaultTheme.LocalSearchOptions['translations']>
>

export type AlgoliaSearchTranslations = StrictTranslationObject<
  NonNullable<DefaultTheme.AlgoliaSearchOptions['translations']>
>

type AskAiObject = Extract<
  NonNullable<DefaultTheme.AlgoliaSearchOptions['askAi']>,
  object
>

type AskAiSidePanel = Extract<
  NonNullable<AskAiObject['sidePanel']>,
  object
>

type AskAiButton = Extract<
  NonNullable<AskAiSidePanel['button']>,
  object
>

type AskAiPanel = Extract<
  NonNullable<AskAiSidePanel['panel']>,
  object
>

type AskAiButtonTranslations = StrictTranslationObject<
  NonNullable<AskAiButton['translations']>
>

type AskAiPanelTranslations = StrictTranslationObject<
  NonNullable<AskAiPanel['translations']>
>

export type AlgoliaAskAiSidePanelTranslations = {
  button: {
    translations: AskAiButtonTranslations
  }
  panel: {
    translations: AskAiPanelTranslations
  }
}

export type SearchConfig = {
  local: {
    translations: LocalSearchTranslations
  }
  algolia: {
    translations: AlgoliaSearchTranslations
  }
  askAi: {
    sidePanel: AlgoliaAskAiSidePanelTranslations
  }
}

type VitePressLocaleConfig =
  NonNullable<UserConfig<ThemeConfig>['locales']>[string]

export type VPi18nConfig =
  Omit<VitePressLocaleConfig, 'label' | 'lang' | 'link' | 'themeConfig'> & {
    label: string
    lang: string
    link?: string
    themeConfig: ThemeTranslations
    search: SearchConfig
  }

export type VPi18nConfigOverride =
  Omit<DeepPartial<VitePressLocaleConfig>, 'themeConfig'> & {
    themeConfig?: DeepPartial<ThemeConfig>
    search?: DeepPartial<SearchConfig>
  }

export type PlainObject = Record<string, unknown>
