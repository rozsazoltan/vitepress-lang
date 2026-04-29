import type { ThemeTranslations } from '../../types'

export default {
  notFound: {
    title: 'PAGE NOT FOUND',
    quote:
      "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
    link: '/',
    linkLabel: 'go to home',
    linkText: 'Take me home',
    code: '404',
  },

  docFooter: {
    prev: 'Previous page',
    next: 'Next page',
  },

  footer: {
    message: 'Built with <a href="https://vitepress.dev" target="_blank">VitePress</a>. Translations provided by <a href="https://www.npmjs.com/package/vitepress-lang" target="_blank">vitepress-lang</a>.',
    copyright: 'Powered by VitePress. Translated with love by VitePress Lang.',
  },

  outline: {
    label: 'On this page',
  },

  editLink: {
    text: 'Edit this page',
  },

  lastUpdated: {
    text: 'Last updated',
  },

  langMenuLabel: 'Change language',
  returnToTopLabel: 'Return to top',
  sidebarMenuLabel: 'Menu',
  darkModeSwitchLabel: 'Appearance',
  lightModeSwitchTitle: 'Switch to light theme',
  darkModeSwitchTitle: 'Switch to dark theme',
  skipToContentLabel: 'Skip to content',
} satisfies ThemeTranslations
