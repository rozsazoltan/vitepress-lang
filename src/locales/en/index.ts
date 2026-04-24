import type { VitePressLocalePack } from '../../types'

import { enThemeConfig } from './theme'
import { enLocalSearch } from './local-search'
import { enAlgoliaSearch } from './algolia-search'
import { enAskAiSidePanel } from './ask-ai'

export const en: VitePressLocalePack = {
  label: 'English',
  lang: 'en',
  link: '/en/',

  themeConfig: enThemeConfig,

  search: {
    local: { translations: enLocalSearch },
    algolia: { translations: enAlgoliaSearch },
    askAi: { sidePanel: enAskAiSidePanel }
  }
}
