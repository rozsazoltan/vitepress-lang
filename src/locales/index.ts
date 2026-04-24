import type { SupportedLocale, VitePressLocalePack } from '../types'
import { de } from './de'
import { hu } from './hu'

export { de } from './de'
export { hu } from './hu'

export const localePacks = {
  de,
  hu
} satisfies Record<SupportedLocale, VitePressLocalePack>
