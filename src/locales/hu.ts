import type {
  AlgoliaAskAiSidePanelTranslations,
  AlgoliaSearchTranslations,
  DefaultThemeLocaleConfig,
  LocalSearchTranslations,
  VitePressLocalePack
} from '../types'

export const huThemeConfig: DefaultThemeLocaleConfig = {
  outline: {
    label: 'Ezen az oldalon'
  },
  docFooter: {
    prev: 'Előző oldal',
    next: 'Következő oldal'
  },
  editLink: {
    text: 'Oldal szerkesztése GitHubon'
  },
  lastUpdated: {
    text: 'Utoljára frissítve'
  },
  darkModeSwitchLabel: 'Megjelenés',
  lightModeSwitchTitle: 'Váltás világos témára',
  darkModeSwitchTitle: 'Váltás sötét témára',
  sidebarMenuLabel: 'Menü',
  returnToTopLabel: 'Vissza az elejére',
  langMenuLabel: 'Nyelv módosítása',
  skipToContentLabel: 'Ugrás a tartalomra'
}

export const huLocalSearch: LocalSearchTranslations = {
  button: {
    buttonText: 'Keresés',
    buttonAriaLabel: 'Keresés'
  },
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
}

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

export const huAskAiSidePanel: AlgoliaAskAiSidePanelTranslations = {
  button: {
    translations: {
      buttonText: 'Kérdezd az AI-t',
      buttonAriaLabel: 'Kérdezd az AI-t'
    }
  },
  panel: {
    translations: {
      header: {
        title: 'Kérdezd az AI-t',
        conversationHistoryTitle: 'Beszélgetési előzményeim',
        newConversationText: 'Új beszélgetés indítása',
        viewConversationHistoryText: 'Előzmények megtekintése'
      },
      promptForm: {
        promptPlaceholderText: 'Kérdés feltevése',
        promptAnsweringText: 'Válasz készül...',
        promptAskAnotherQuestionText: 'Tegyél fel még egy kérdést',
        promptDisclaimerText: 'A választ AI generálta, és tartalmazhat hibákat.',
        promptLabelText: 'Küldés Enterrel, sortörés Shift+Enterrel.',
        promptAriaLabelText: 'Kérdésmező'
      },
      conversationScreen: {
        preToolCallText: 'Keresés folyamatban...',
        searchingText: 'Keresés folyamatban...',
        toolCallResultText: 'Keresés kész',
        conversationDisclaimer: 'A választ AI generálta, és tartalmazhat hibákat. Kérjük, ellenőrizd.',
        reasoningText: 'Elemzés...',
        thinkingText: 'Gondolkodik...',
        relatedSourcesText: 'Kapcsolódó források',
        stoppedStreamingText: 'Leállítottad ezt a választ',
        copyButtonText: 'Másolás',
        copyButtonCopiedText: 'Másolva!',
        likeButtonTitle: 'Tetszik',
        dislikeButtonTitle: 'Nem tetszik',
        thanksForFeedbackText: 'Köszönjük a visszajelzést!',
        errorTitleText: 'Csevegési hiba'
      },
      newConversationScreen: {
        titleText: 'Miben segíthetek ma?',
        introductionText:
          'Átkutatom a dokumentációdat, és gyorsan segítek a beállítási útmutatókkal, funkcióleírásokkal és hibaelhárítási tippekkel.'
      },
      logo: {
        poweredByText: 'Működteti'
      }
    }
  }
}

export const hu: VitePressLocalePack = {
  themeConfig: huThemeConfig,
  search: {
    local: { translations: huLocalSearch },
    algolia: { translations: huAlgoliaSearch },
    askAi: { sidePanel: huAskAiSidePanel }
  }
}
