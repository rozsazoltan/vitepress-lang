import type { SupportedLocale, VitePressLocalePack } from '../types'

import de from './de'
import en from './en'
import es from './es'
import fr from './fr'
import hu from './hu'

export { de, en, es, fr, hu }
export const localePacks = {
  de,
  en,
  es,
  fr,
  hu,
} satisfies Record<SupportedLocale, VitePressLocalePack>
