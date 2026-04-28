import type { ThemeConfig } from '../../types'

export default {
  notFound: {
    title: 'AZ OLDAL NEM TALÁLHATÓ',
    quote: 'De ha nem változtatsz irányt, és tovább keresel, lehet, hogy oda érsz, ahová tartasz.',
    linkLabel: 'ugrás a főoldalra',
    linkText: 'Vigyél haza'
  },

  footer: {
    message: 'Készült <a href="https://vitepress.dev" target="_blank">VitePress</a> segítségével. A fordítást a <a href="https://www.npmjs.com/package/vitepress-lang" target="_blank">vitepress-lang</a> csomag biztosítja.',
  },
  docFooter: {
    prev: 'Előző oldal',
    next: 'Következő oldal'
  },

  outline: {
    label: 'Ezen az oldalon'
  },
  editLink: {
    pattern: 'UNDEFINED',
    text: 'Javasolj módosításokat ehhez az oldalhoz'
  },
  lastUpdated: {
    text: 'Utoljára frissítve'
  },

  langMenuLabel: 'Nyelv váltása',
  returnToTopLabel: 'Vissza a tetejére',
  sidebarMenuLabel: 'Oldalsáv menü',
  darkModeSwitchLabel: 'Sötét téma',
  lightModeSwitchTitle: 'Váltás világos módra',
  darkModeSwitchTitle: 'Váltás sötét módra',
  skipToContentLabel: 'Ugrás a tartalomhoz',
} satisfies ThemeConfig
