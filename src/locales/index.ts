import type { SupportedLocale, VitePressLocalePack } from '../types'

import de from './de'
import en from './en'
import es from './es'
import hu from './hu'

export { de, en, es, hu }
export const localePacks = {
  de,
  en,
  es,
  hu,
} satisfies Record<SupportedLocale, VitePressLocalePack>
