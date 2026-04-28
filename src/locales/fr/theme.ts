import type { ThemeConfig } from '../../types'

export default {
  notFound: {
    title: "PAGE INTROUVABLE",
    quote: "La page n'existe pas, veuillez vérifier l'URL.",
    linkLabel: "Retour à l'accueil",
    linkText: "Retour à l'accueil",
  },

  footer: {
    message: 'Built with <a href="https://vitepress.dev" target="_blank">VitePress</a>. Translations provided by <a href="https://npmjs.com/package/rozsazoltan/vitepress-lang" target="_blank">vitepress-lang</a>.',
    // copyright: "...",
  },
  docFooter: {
    prev: 'Précédent',
    next: 'Suivant'
  },

  outline: {
    label: 'Sur cette page'
  },
  editLink: {
    text: 'Suggérer des modifications à cette page'
  },
  lastUpdated: {
    text: 'Dernière mise à jour'
  },

  langMenuLabel: 'Change Language',
  returnToTopLabel: 'Retour en haut',
  sidebarMenuLabel: 'Sommaire',
  darkModeSwitchLabel: 'Changer de mode',
  lightModeSwitchTitle: 'Passer en mode clair',
  darkModeSwitchTitle: 'Passer en mode sombre',
  skipToContentLabel: 'Skip to content',
} satisfies ThemeConfig
