import type { SupportedLocale, VPi18nConfig } from '../types'

import de from './de'
import en from './en'
import es from './es'
import fr from './fr'
import hu from './hu'

export { de, en, es, fr, hu }

export const localePacks: Record<SupportedLocale, VPi18nConfig> = {
  de,
  en,
  es,
  fr,
  hu,
}
