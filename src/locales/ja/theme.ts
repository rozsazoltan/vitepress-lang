import type { ThemeTranslations } from '../../types'

export default {
  notFound: {
    title: 'ページが見つかりません',
    quote: 'しかし、進む方向を変えずに探し続けると、向かっている先にたどり着くかもしれません。',
    linkLabel: 'ホームへ移動',
    linkText: 'ホームへ戻る',
  },
  footer: {
    message: '<a href="https://vitepress.dev" target="_blank" rel="noopener noreferrer">VitePress</a> で構築され、<a href="https://www.npmjs.com/package/vitepress-lang" target="_blank" rel="noopener noreferrer">vitepress-lang</a> で翻訳されています。',
  },
  docFooter: {
    prev: '前のページ',
    next: '次のページ',
  },
  outline: {
    label: 'このページの内容',
  },
  editLink: {
    pattern: 'UNDEFINED',
    text: 'このページを編集',
  },
  lastUpdated: {
    text: '最終更新日',
  },
  langMenuLabel: '言語を変更',
  returnToTopLabel: 'トップへ戻る',
  sidebarMenuLabel: 'メニュー',
  darkModeSwitchLabel: '外観',
  lightModeSwitchTitle: 'ライトテーマに切り替え',
  darkModeSwitchTitle: 'ダークテーマに切り替え',
  skipToContentLabel: 'コンテンツへスキップ',
} satisfies ThemeTranslations
