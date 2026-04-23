export type SupportedLocale = 'de' | 'hu'

export interface DefaultThemeLocaleConfig {
  outline: {
    label: string
  }
  docFooter: {
    prev: string
    next: string
  }
  editLink: {
    text: string
  }
  lastUpdated: {
    text: string
  }
  darkModeSwitchLabel: string
  lightModeSwitchTitle: string
  darkModeSwitchTitle: string
  sidebarMenuLabel: string
  returnToTopLabel: string
  langMenuLabel: string
  skipToContentLabel: string
}

export interface LocalSearchTranslations {
  button: {
    buttonText: string
    buttonAriaLabel: string
  }
  modal: {
    displayDetails: string
    resetButtonTitle: string
    backButtonTitle: string
    noResultsText: string
    footer: {
      selectText: string
      selectKeyAriaLabel: string
      navigateText: string
      navigateUpKeyAriaLabel: string
      navigateDownKeyAriaLabel: string
      closeText: string
      closeKeyAriaLabel: string
    }
  }
}

export interface AlgoliaSearchTranslations {
  button: {
    buttonText: string
    buttonAriaLabel: string
  }
  modal: {
    searchBox: {
      clearButtonTitle: string
      clearButtonAriaLabel: string
      closeButtonText: string
      closeButtonAriaLabel: string
      placeholderText: string
      placeholderTextAskAi: string
      placeholderTextAskAiStreaming: string
      searchInputLabel: string
      backToKeywordSearchButtonText: string
      backToKeywordSearchButtonAriaLabel: string
      newConversationPlaceholder: string
      conversationHistoryTitle: string
      startNewConversationText: string
      viewConversationHistoryText: string
      threadDepthErrorPlaceholder: string
    }
    newConversation: {
      newConversationTitle: string
      newConversationDescription: string
    }
    footer: {
      selectText: string
      submitQuestionText: string
      selectKeyAriaLabel: string
      navigateText: string
      navigateUpKeyAriaLabel: string
      navigateDownKeyAriaLabel: string
      closeText: string
      backToSearchText: string
      closeKeyAriaLabel: string
      poweredByText: string
    }
    errorScreen: {
      titleText: string
      helpText: string
    }
    startScreen: {
      recentSearchesTitle: string
      noRecentSearchesText: string
      saveRecentSearchButtonTitle: string
      removeRecentSearchButtonTitle: string
      favoriteSearchesTitle: string
      removeFavoriteSearchButtonTitle: string
      recentConversationsTitle: string
      removeRecentConversationButtonTitle: string
    }
    noResultsScreen: {
      noResultsText: string
      suggestedQueryText: string
      reportMissingResultsText: string
      reportMissingResultsLinkText: string
    }
    resultsScreen: {
      askAiPlaceholder: string
      noResultsAskAiPlaceholder: string
    }
    askAiScreen: {
      disclaimerText: string
      relatedSourcesText: string
      thinkingText: string
      copyButtonText: string
      copyButtonCopiedText: string
      copyButtonTitle: string
      likeButtonTitle: string
      dislikeButtonTitle: string
      thanksForFeedbackText: string
      preToolCallText: string
      duringToolCallText: string
      afterToolCallText: string
      stoppedStreamingText: string
      errorTitleText: string
      threadDepthExceededMessage: string
      startNewConversationButtonText: string
    }
  }
}

export interface AlgoliaAskAiSidePanelTranslations {
  button: {
    translations: {
      buttonText: string
      buttonAriaLabel: string
    }
  }
  panel: {
    translations: {
      header: {
        title: string
        conversationHistoryTitle: string
        newConversationText: string
        viewConversationHistoryText: string
      }
      promptForm: {
        promptPlaceholderText: string
        promptAnsweringText: string
        promptAskAnotherQuestionText: string
        promptDisclaimerText: string
        promptLabelText: string
        promptAriaLabelText: string
      }
      conversationScreen: {
        preToolCallText: string
        searchingText: string
        toolCallResultText: string
        conversationDisclaimer: string
        reasoningText: string
        thinkingText: string
        relatedSourcesText: string
        stoppedStreamingText: string
        copyButtonText: string
        copyButtonCopiedText: string
        likeButtonTitle: string
        dislikeButtonTitle: string
        thanksForFeedbackText: string
        errorTitleText: string
      }
      newConversationScreen: {
        titleText: string
        introductionText: string
      }
      logo: {
        poweredByText: string
      }
    }
  }
}

export interface VitePressLocalePack {
  themeConfig: DefaultThemeLocaleConfig
  search: {
    local: {
      translations: LocalSearchTranslations
    }
    algolia: {
      translations: AlgoliaSearchTranslations
    }
    askAi: {
      sidePanel: AlgoliaAskAiSidePanelTranslations
    }
  }
}

const deThemeConfig: DefaultThemeLocaleConfig = {
  outline: {
    label: 'Auf dieser Seite'
  },
  docFooter: {
    prev: 'Vorherige Seite',
    next: 'Nächste Seite'
  },
  editLink: {
    text: 'Diese Seite auf GitHub bearbeiten'
  },
  lastUpdated: {
    text: 'Zuletzt aktualisiert'
  },
  darkModeSwitchLabel: 'Darstellung',
  lightModeSwitchTitle: 'Zum hellen Design wechseln',
  darkModeSwitchTitle: 'Zum dunklen Design wechseln',
  sidebarMenuLabel: 'Menü',
  returnToTopLabel: 'Zurück nach oben',
  langMenuLabel: 'Sprache ändern',
  skipToContentLabel: 'Zum Inhalt springen'
}

const huThemeConfig: DefaultThemeLocaleConfig = {
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

const deLocalSearch: LocalSearchTranslations = {
  button: {
    buttonText: 'Suche',
    buttonAriaLabel: 'Suche'
  },
  modal: {
    displayDetails: 'Detaillierte Liste anzeigen',
    resetButtonTitle: 'Suche zurücksetzen',
    backButtonTitle: 'Suche schließen',
    noResultsText: 'Keine Ergebnisse',
    footer: {
      selectText: 'Auswählen',
      selectKeyAriaLabel: 'Enter',
      navigateText: 'Navigieren',
      navigateUpKeyAriaLabel: 'Pfeil nach oben',
      navigateDownKeyAriaLabel: 'Pfeil nach unten',
      closeText: 'Schließen',
      closeKeyAriaLabel: 'Esc'
    }
  }
}

const huLocalSearch: LocalSearchTranslations = {
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

const deAlgoliaSearch: AlgoliaSearchTranslations = {
  button: {
    buttonText: 'Suche',
    buttonAriaLabel: 'Suche'
  },
  modal: {
    searchBox: {
      clearButtonTitle: 'Löschen',
      clearButtonAriaLabel: 'Suchanfrage löschen',
      closeButtonText: 'Schließen',
      closeButtonAriaLabel: 'Schließen',
      placeholderText: 'Dokumentation durchsuchen oder KI fragen',
      placeholderTextAskAi: 'Noch eine Frage stellen...',
      placeholderTextAskAiStreaming: 'Antwort wird erstellt...',
      searchInputLabel: 'Suche',
      backToKeywordSearchButtonText: 'Zurück zur Stichwortsuche',
      backToKeywordSearchButtonAriaLabel: 'Zurück zur Stichwortsuche',
      newConversationPlaceholder: 'Frage stellen',
      conversationHistoryTitle: 'Meine Gesprächsverläufe',
      startNewConversationText: 'Neue Unterhaltung starten',
      viewConversationHistoryText: 'Verlauf anzeigen',
      threadDepthErrorPlaceholder: 'Konversationslimit erreicht'
    },
    newConversation: {
      newConversationTitle: 'Wie kann ich heute helfen?',
      newConversationDescription:
        'Ich durchsuche deine Dokumentation und helfe dir schnell bei Einrichtungsanleitungen, Funktionsdetails und Hinweisen zur Fehlerbehebung.'
    },
    footer: {
      selectText: 'Auswählen',
      submitQuestionText: 'Frage absenden',
      selectKeyAriaLabel: 'Enter',
      navigateText: 'Navigieren',
      navigateUpKeyAriaLabel: 'Pfeil nach oben',
      navigateDownKeyAriaLabel: 'Pfeil nach unten',
      closeText: 'Schließen',
      backToSearchText: 'Zurück zur Suche',
      closeKeyAriaLabel: 'Esc',
      poweredByText: 'Bereitgestellt von'
    },
    errorScreen: {
      titleText: 'Ergebnisse konnten nicht geladen werden',
      helpText: 'Bitte überprüfe deine Netzwerkverbindung.'
    },
    startScreen: {
      recentSearchesTitle: 'Zuletzt gesucht',
      noRecentSearchesText: 'Keine letzten Suchanfragen',
      saveRecentSearchButtonTitle: 'Diese Suche speichern',
      removeRecentSearchButtonTitle: 'Diese Suche aus dem Verlauf entfernen',
      favoriteSearchesTitle: 'Favoriten',
      removeFavoriteSearchButtonTitle: 'Diese Suche aus den Favoriten entfernen',
      recentConversationsTitle: 'Letzte Unterhaltungen',
      removeRecentConversationButtonTitle: 'Diese Unterhaltung aus dem Verlauf entfernen'
    },
    noResultsScreen: {
      noResultsText: 'Keine passenden Ergebnisse',
      suggestedQueryText: 'Versuche es mit',
      reportMissingResultsText: 'Sollte es dafür Ergebnisse geben?',
      reportMissingResultsLinkText: 'Sag es uns.'
    },
    resultsScreen: {
      askAiPlaceholder: 'KI fragen:',
      noResultsAskAiPlaceholder: 'Nichts in der Doku gefunden? Frag Ask AI:'
    },
    askAiScreen: {
      disclaimerText: 'Die Antwort wurde von KI generiert und kann Fehler enthalten. Bitte prüfe sie.',
      relatedSourcesText: 'Verwandte Quellen',
      thinkingText: 'Denkt nach...',
      copyButtonText: 'Kopieren',
      copyButtonCopiedText: 'Kopiert!',
      copyButtonTitle: 'Kopieren',
      likeButtonTitle: 'Gefällt mir',
      dislikeButtonTitle: 'Gefällt mir nicht',
      thanksForFeedbackText: 'Danke für dein Feedback!',
      preToolCallText: 'Suche läuft...',
      duringToolCallText: 'Suche läuft...',
      afterToolCallText: 'Suche abgeschlossen',
      stoppedStreamingText: 'Du hast diese Antwort gestoppt',
      errorTitleText: 'Chat-Fehler',
      threadDepthExceededMessage: 'Diese Unterhaltung wurde beendet, damit die Antworten präzise bleiben.',
      startNewConversationButtonText: 'Neue Unterhaltung starten'
    }
  }
}

const huAlgoliaSearch: AlgoliaSearchTranslations = {
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

const deAskAiSidePanel: AlgoliaAskAiSidePanelTranslations = {
  button: {
    translations: {
      buttonText: 'KI fragen',
      buttonAriaLabel: 'KI fragen'
    }
  },
  panel: {
    translations: {
      header: {
        title: 'KI fragen',
        conversationHistoryTitle: 'Meine Gesprächsverläufe',
        newConversationText: 'Neue Unterhaltung starten',
        viewConversationHistoryText: 'Verlauf anzeigen'
      },
      promptForm: {
        promptPlaceholderText: 'Frage stellen',
        promptAnsweringText: 'Antwort wird erstellt...',
        promptAskAnotherQuestionText: 'Noch eine Frage stellen',
        promptDisclaimerText: 'Die Antwort wurde von KI generiert und kann Fehler enthalten.',
        promptLabelText: 'Mit Enter senden, mit Shift+Enter Zeilenumbruch einfügen.',
        promptAriaLabelText: 'Frageeingabe'
      },
      conversationScreen: {
        preToolCallText: 'Suche läuft...',
        searchingText: 'Suche läuft...',
        toolCallResultText: 'Suche abgeschlossen',
        conversationDisclaimer: 'Die Antwort wurde von KI generiert und kann Fehler enthalten. Bitte prüfe sie.',
        reasoningText: 'Analysiert...',
        thinkingText: 'Denkt nach...',
        relatedSourcesText: 'Verwandte Quellen',
        stoppedStreamingText: 'Du hast diese Antwort gestoppt',
        copyButtonText: 'Kopieren',
        copyButtonCopiedText: 'Kopiert!',
        likeButtonTitle: 'Gefällt mir',
        dislikeButtonTitle: 'Gefällt mir nicht',
        thanksForFeedbackText: 'Danke für dein Feedback!',
        errorTitleText: 'Chat-Fehler'
      },
      newConversationScreen: {
        titleText: 'Wie kann ich heute helfen?',
        introductionText:
          'Ich durchsuche deine Dokumentation und helfe dir schnell bei Einrichtungsanleitungen, Funktionsdetails und Hinweisen zur Fehlerbehebung.'
      },
      logo: {
        poweredByText: 'Bereitgestellt von'
      }
    }
  }
}

const huAskAiSidePanel: AlgoliaAskAiSidePanelTranslations = {
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

export const localePacks: Record<SupportedLocale, VitePressLocalePack> = {
  de: {
    themeConfig: deThemeConfig,
    search: {
      local: { translations: deLocalSearch },
      algolia: { translations: deAlgoliaSearch },
      askAi: { sidePanel: deAskAiSidePanel }
    }
  },
  hu: {
    themeConfig: huThemeConfig,
    search: {
      local: { translations: huLocalSearch },
      algolia: { translations: huAlgoliaSearch },
      askAi: { sidePanel: huAskAiSidePanel }
    }
  }
}

export {
  deThemeConfig,
  huThemeConfig,
  deLocalSearch,
  huLocalSearch,
  deAlgoliaSearch,
  huAlgoliaSearch,
  deAskAiSidePanel,
  huAskAiSidePanel
}

export function getLocalePack(locale: SupportedLocale): VitePressLocalePack {
  return localePacks[locale]
}

export function createRootLocaleConfig(locale: SupportedLocale) {
  const pack = getLocalePack(locale)

  return {
    ...pack.themeConfig,
    search: {
      provider: 'local' as const,
      options: {
        locales: {
          root: pack.search.local
        }
      }
    }
  }
}

export function createNamedLocaleConfig(locale: SupportedLocale, localeKey: string) {
  const pack = getLocalePack(locale)

  return {
    ...pack.themeConfig,
    search: {
      provider: 'local' as const,
      options: {
        locales: {
          [localeKey]: pack.search.local
        }
      }
    }
  }
}

export function createAlgoliaRootLocaleConfig(locale: SupportedLocale) {
  const pack = getLocalePack(locale)

  return {
    ...pack.themeConfig,
    search: {
      provider: 'algolia' as const,
      options: {
        locales: {
          root: {
            ...pack.search.algolia,
            askAi: pack.search.askAi
          }
        }
      }
    }
  }
}

export function createAlgoliaNamedLocaleConfig(locale: SupportedLocale, localeKey: string) {
  const pack = getLocalePack(locale)

  return {
    ...pack.themeConfig,
    search: {
      provider: 'algolia' as const,
      options: {
        locales: {
          [localeKey]: {
            ...pack.search.algolia,
            askAi: pack.search.askAi
          }
        }
      }
    }
  }
}
