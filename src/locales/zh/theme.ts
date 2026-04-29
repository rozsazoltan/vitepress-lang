import type { ThemeTranslations } from '../../types'

export default {
  notFound: {
    title: '页面未找到',
    quote: '但如果你不改变方向并继续寻找，最终可能会到达你正在前往的地方。',
    linkLabel: '回到首页',
    linkText: '带我回首页',
  },
  footer: {
    message: '本站由 <a href="https://vitepress.dev" target="_blank" rel="noopener noreferrer">VitePress</a> 构建，并通过 <a href="https://www.npmjs.com/package/vitepress-lang" target="_blank" rel="noopener noreferrer">vitepress-lang</a> 翻译。',
  },
  docFooter: {
    prev: '上一页',
    next: '下一页',
  },
  outline: {
    label: '本页内容',
  },
  editLink: {
    pattern: 'UNDEFINED',
    text: '编辑此页面',
  },
  lastUpdated: {
    text: '最后更新',
  },
  langMenuLabel: '切换语言',
  returnToTopLabel: '返回顶部',
  sidebarMenuLabel: '菜单',
  darkModeSwitchLabel: '外观',
  lightModeSwitchTitle: '切换到浅色主题',
  darkModeSwitchTitle: '切换到深色主题',
  skipToContentLabel: '跳到内容',
} satisfies ThemeTranslations
