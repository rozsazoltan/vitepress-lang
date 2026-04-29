import type { SupportedLocale, VPi18nConfig } from '../types'

import { default as en } from './en'
import { default as es } from './es'
import { default as fa } from './fa'
import { default as ja } from './ja'
import { default as ko } from './ko'
import { default as pt } from './pt'
import { default as ru } from './ru'
import { default as zh } from './zh'
import { default as de } from './de'
import { default as hu } from './hu'
import { default as fr } from './fr'
import { default as ro } from './ro'
import { default as sr } from './sr'
import { default as sk } from './sk'
import { default as cs } from './cs'

export { default as en } from './en'
export { default as es } from './es'
export { default as fa } from './fa'
export { default as ja } from './ja'
export { default as ko } from './ko'
export { default as pt } from './pt'
export { default as ru } from './ru'
export { default as zh } from './zh'
export { default as de } from './de'
export { default as hu } from './hu'
export { default as fr } from './fr'
export { default as ro } from './ro'
export { default as sr } from './sr'
export { default as sk } from './sk'
export { default as cs } from './cs'

export const supportedLocales = [
  'en',
  'es',
  'fa',
  'ja',
  'ko',
  'pt',
  'ru',
  'zh',
  'de',
  'hu',
  'fr',
  'ro',
  'sr',
  'sk',
  'cs',
] as const

export const localePacks: Record<SupportedLocale, VPi18nConfig> = {
  en: en,
  es: es,
  fa: fa,
  ja: ja,
  ko: ko,
  pt: pt,
  ru: ru,
  zh: zh,
  de: de,
  hu: hu,
  fr: fr,
  ro: ro,
  sr: sr,
  sk: sk,
  cs: cs,
}
