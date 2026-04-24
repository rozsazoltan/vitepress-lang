import type { AlgoliaSearchTranslations } from '../../types'

export const huAlgoliaSearch: AlgoliaSearchTranslations = {
  button: {
    buttonText: 'Keresés',
    buttonAriaLabel: 'Keresés'
  },
  modal: {
    searchBox: {
      clearButtonTitle: 'Törlés',
      clearButtonAriaLabel: 'Keresőkifejezés törlése',
      closeButtonText: 'Bezárás',
      closeButtonAriaLabel: 'Bezárás',
      placeholderText: 'Dokumentáció keresése vagy kérdés az AI-nak',
      placeholderTextAskAi: 'Tegyél fel még egy kérdést...',
      placeholderTextAskAiStreaming: 'Válasz készül...',
      searchInputLabel: 'Keresés',
      backToKeywordSearchButtonText: 'Vissza a kulcsszavas kereséshez',
      backToKeywordSearchButtonAriaLabel: 'Vissza a kulcsszavas kereséshez',
      newConversationPlaceholder: 'Kérdés feltevése',
      conversationHistoryTitle: 'Beszélgetési előzményeim',
      startNewConversationText: 'Új beszélgetés indítása',
      viewConversationHistoryText: 'Előzmények megtekintése',
      threadDepthErrorPlaceholder: 'Elérted a beszélgetési limitet'
    },
    newConversation: {
      newConversationTitle: 'Miben segíthetek ma?',
      newConversationDescription:
        'Átkutatom a dokumentációdat, és gyorsan segítek a beállítási útmutatókkal, funkcióleírásokkal és hibaelhárítási tippekkel.'
    },
    footer: {
      selectText: 'Kiválasztás',
      submitQuestionText: 'Kérdés elküldése',
      selectKeyAriaLabel: 'Enter',
      navigateText: 'Navigálás',
      navigateUpKeyAriaLabel: 'Felfelé nyíl',
      navigateDownKeyAriaLabel: 'Lefelé nyíl',
      closeText: 'Bezárás',
      backToSearchText: 'Vissza a kereséshez',
      closeKeyAriaLabel: 'Esc',
      poweredByText: 'Működteti'
    },
    errorScreen: {
      titleText: 'Nem sikerült betölteni az eredményeket',
      helpText: 'Ellenőrizd a hálózati kapcsolatot.'
    },
    startScreen: {
      recentSearchesTitle: 'Legutóbbi keresések',
      noRecentSearchesText: 'Nincsenek legutóbbi keresések',
      saveRecentSearchButtonTitle: 'Keresés mentése',
      removeRecentSearchButtonTitle: 'Keresés eltávolítása az előzményekből',
      favoriteSearchesTitle: 'Kedvencek',
      removeFavoriteSearchButtonTitle: 'Keresés eltávolítása a kedvencek közül',
      recentConversationsTitle: 'Legutóbbi beszélgetések',
      removeRecentConversationButtonTitle: 'Beszélgetés eltávolítása az előzményekből'
    },
    noResultsScreen: {
      noResultsText: 'Nincs megfelelő találat',
      suggestedQueryText: 'Próbálj meg erre keresni:',
      reportMissingResultsText: 'Szerinted erre a lekérdezésre kellene találat?',
      reportMissingResultsLinkText: 'Jelezd nekünk.'
    },
    resultsScreen: {
      askAiPlaceholder: 'Kérdezd az AI-t:',
      noResultsAskAiPlaceholder: 'Nem találtál semmit a dokumentációban? Kérdezd az Ask AI-t:'
    },
    askAiScreen: {
      disclaimerText: 'A választ AI generálta, és tartalmazhat hibákat. Kérjük, ellenőrizd.',
      relatedSourcesText: 'Kapcsolódó források',
      thinkingText: 'Gondolkodik...',
      copyButtonText: 'Másolás',
      copyButtonCopiedText: 'Másolva!',
      copyButtonTitle: 'Másolás',
      likeButtonTitle: 'Tetszik',
      dislikeButtonTitle: 'Nem tetszik',
      thanksForFeedbackText: 'Köszönjük a visszajelzést!',
      preToolCallText: 'Keresés folyamatban...',
      duringToolCallText: 'Keresés folyamatban...',
      afterToolCallText: 'Keresés kész',
      stoppedStreamingText: 'Leállítottad ezt a választ',
      errorTitleText: 'Csevegési hiba',
      threadDepthExceededMessage: 'A beszélgetés lezárult, hogy a válaszok pontosak maradjanak.',
      startNewConversationButtonText: 'Új beszélgetés indítása'
    }
  }
}
