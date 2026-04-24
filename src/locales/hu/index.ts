import type { VitePressLocalePack } from '../../types'
import { huAlgoliaSearch } from './algolia-search'
import { huAskAiSidePanel } from './ask-ai-side-panel'
import { huLocalSearch } from './local-search'
import { huMeta } from './meta'
import { huThemeConfig } from './theme'

export { huAlgoliaSearch } from './algolia-search'
export { huAskAiSidePanel } from './ask-ai-side-panel'
export { huLocalSearch } from './local-search'
export { huMeta } from './meta'
export { huThemeConfig } from './theme'

export const hu: VitePressLocalePack = {
  ...huMeta,
  themeConfig: huThemeConfig,
  search: {
    local: { translations: huLocalSearch },
    algolia: { translations: huAlgoliaSearch },
    askAi: { sidePanel: huAskAiSidePanel }
  }
}

export default hu
