import type { ThemeConfig } from '../../types'

export default {
  notFound: {
    title: 'PAGE NOT FOUND',
    quote: "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
    linkLabel: 'go to home',
    linkText: 'Take me home'
  },

  footer: {
    message: 'Built with <a href="https://vitepress.dev" target="_blank">VitePress</a>. Translations provided by <a href="https://npmjs.com/package/rozsazoltan/vitepress-lang" target="_blank">vitepress-lang</a>.',
    // copyright: "...",
  },
  docFooter: {
    prev: 'Previous page',
    next: 'Next page'
  },

  outline: {
    label: 'On this page'
  },
  editLink: {
    pattern: 'UNDEFINED',
    text: 'Suggest edits to this page'
  },
  lastUpdated: {
    text: 'Last updated'
  },

  langMenuLabel: 'Change Language',
  returnToTopLabel: 'Return to top',
  sidebarMenuLabel: 'Sidebar Menu',
  darkModeSwitchLabel: 'Dark Theme',
  lightModeSwitchTitle: 'Switch to light mode',
  darkModeSwitchTitle: 'Switch to dark mode',
  skipToContentLabel: 'Skip to content',
} satisfies ThemeConfig
