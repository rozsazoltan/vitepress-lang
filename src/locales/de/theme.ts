import type { ThemeConfig } from '../../types'
 
export default {
  notFound: {
    title: 'SEITE NICHT GEFUNDEN',
    quote: 'Aber wenn du deine Richtung nicht änderst und weiter suchst, könntest du dort ankommen, wo du hingehst.',
    linkLabel: 'zur Startseite',
    linkText: 'Bring mich nach Hause'
  },
 
  footer: {
    message: 'Erstellt mit <a href="https://vitepress.dev" target="_blank">VitePress</a>. Übersetzungen bereitgestellt von <a href="https://www.npmjs.com/package/vitepress-lang" target="_blank">vitepress-lang</a>.',
  },
  docFooter: {
    prev: 'Vorherige Seite',
    next: 'Nächste Seite'
  },
 
  outline: {
    label: 'Auf dieser Seite'
  },
  editLink: {
    text: 'Vorschläge für Änderungen an dieser Seite'
  },
  lastUpdated: {
    text: 'Zuletzt aktualisiert'
  },
 
  langMenuLabel: 'Sprache ändern',
  returnToTopLabel: 'Zurück nach oben',
  sidebarMenuLabel: 'Seitenleiste',
  darkModeSwitchLabel: 'Dunkles Design',
  lightModeSwitchTitle: 'Zum hellen Modus wechseln',
  darkModeSwitchTitle: 'Zum dunklen Modus wechseln',
  skipToContentLabel: 'Zum Inhalt springen',
} satisfies ThemeConfig
