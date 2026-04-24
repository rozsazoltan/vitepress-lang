import type { LocalSearchTranslations } from '../../types'

export default {
  button: { buttonText: 'Keresés', buttonAriaLabel: 'Keresés' },
  modal: {
    displayDetails: 'Részletes lista megjelenítése',
    resetButtonTitle: 'Keresés visszaállítása',
    backButtonTitle: 'Keresés bezárása',
    noResultsText: 'Nincs találat',
    footer: {
      selectText: 'Kiválasztás',
      selectKeyAriaLabel: 'Enter',
      navigateText: 'Navigálás',
      navigateUpKeyAriaLabel: 'Felfelé nyíl',
      navigateDownKeyAriaLabel: 'Lefelé nyíl',
      closeText: 'Bezárás',
      closeKeyAriaLabel: 'Esc'
    }
  }
} satisfies LocalSearchTranslations
