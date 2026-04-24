import type { VitePressLocalePack } from '../../types'
import { deAskAiSidePanel } from './ask-ai'
import { deAlgoliaSearch } from './algolia-search'
import { deLocalSearch } from './local-search'
import { deThemeConfig } from './theme'

export { deAskAiSidePanel } from './ask-ai'
export { deAlgoliaSearch } from './algolia-search'
export { deLocalSearch } from './local-search'
export { deThemeConfig } from './theme'

export const de = {
  label: 'Deutsch',
  lang: 'de',
  link: '/de/',
  themeConfig: deThemeConfig,
  search: {
    local: deLocalSearch,
    algolia: deAlgoliaSearch,
    askAi: deAskAiSidePanel
  }
} satisfies VitePressLocalePack
