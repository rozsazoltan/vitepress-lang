import type { SupportedLocale, VitePressLocalePack } from '../types'
import { en } from './en'
import { de } from './de'
import { hu } from './hu'

export { en } from './en'
export { de } from './de'
export { hu } from './hu'

export const localePacks = {
  en,
  de,
  hu
} satisfies Record<SupportedLocale, VitePressLocalePack>
