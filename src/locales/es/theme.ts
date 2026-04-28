import type { ThemeConfig } from '../../types'

export default {
  notFound: {
    title: 'PÁGINA NO ENCONTRADA',
    quote:
      'Pero si no cambias de dirección y sigues buscando, podrías terminar donde te diriges.',
    linkLabel: 'ir a inicio',
    linkText: 'Llévame a inicio'
  },

  footer: {
    message: 'Built with <a href="https://vitepress.dev" target="_blank">VitePress</a>. Translations provided by <a href="https://npmjs.com/package/rozsazoltan/vitepress-lang" target="_blank">vitepress-lang</a>.',
    // copyright: "...",
  },
  docFooter: {
    prev: 'Anterior',
    next: 'Siguiente'
  },

  outline: {
    label: 'En esta página'
  },
  editLink: {
    text: 'Editar esta página en GitHub'
  },
  lastUpdated: {
    text: 'Actualizado el'
  },

  langMenuLabel: 'Cambiar Idioma',
  returnToTopLabel: 'Volver arriba',
  sidebarMenuLabel: 'Menu Lateral',
  darkModeSwitchLabel: 'Tema Oscuro',
  lightModeSwitchTitle: 'Cambiar a modo claro',
  darkModeSwitchTitle: 'Cambiar a modo oscuro',
  skipToContentLabel: 'Saltar al contenido',
} satisfies ThemeConfig
