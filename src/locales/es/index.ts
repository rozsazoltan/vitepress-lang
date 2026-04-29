import type { VPi18nConfig } from '../../types'
import themeConfig from './theme'
import localSearch from './local-search'
import algoliaSearch from './algolia-search'
import askAiSidePanel from './ask-ai'

export default {
  label: 'Español',
  lang: 'es',
  link: '/es/',
  themeConfig: themeConfig,
  search: {
    local: { translations: localSearch },
    algolia: { translations: algoliaSearch },
    askAi: { sidePanel: askAiSidePanel }
  }
} satisfies VPi18nConfig
