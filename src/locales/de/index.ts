import type { VitePressLocalePack } from '../../types'
import { deAlgoliaSearch } from './algolia-search'
import { deAskAiSidePanel } from './ask-ai-side-panel'
import { deLocalSearch } from './local-search'
import { deMeta } from './meta'
import { deThemeConfig } from './theme'

export { deAlgoliaSearch } from './algolia-search'
export { deAskAiSidePanel } from './ask-ai-side-panel'
export { deLocalSearch } from './local-search'
export { deMeta } from './meta'
export { deThemeConfig } from './theme'

export const de: VitePressLocalePack = {
  ...deMeta,
  themeConfig: deThemeConfig,
  search: {
    local: { translations: deLocalSearch },
    algolia: { translations: deAlgoliaSearch },
    askAi: { sidePanel: deAskAiSidePanel }
  }
}

export default de
