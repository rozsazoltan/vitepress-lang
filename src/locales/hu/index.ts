import type { VitePressLocalePack } from '../../types'
import { huAskAiSidePanel } from './ask-ai'
import { huAlgoliaSearch } from './algolia-search'
import { huLocalSearch } from './local-search'
import { huThemeConfig } from './theme'

export { huAskAiSidePanel } from './ask-ai'
export { huAlgoliaSearch } from './algolia-search'
export { huLocalSearch } from './local-search'
export { huThemeConfig } from './theme'

export const hu = {
  label: 'Magyar',
  lang: 'hu',
  link: '/hu/',
  themeConfig: huThemeConfig,
  search: {
    local: huLocalSearch,
    algolia: huAlgoliaSearch,
    askAi: huAskAiSidePanel
  }
} satisfies VitePressLocalePack
