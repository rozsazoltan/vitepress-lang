import type {
  AlgoliaAskAiSidePanelTranslations,
  AlgoliaSearchTranslations,
  DefaultThemeLocaleConfig,
  LocalSearchTranslations,
  VitePressLocalePack
} from '../types'

export const deThemeConfig: DefaultThemeLocaleConfig = {
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

export const deLocalSearch: LocalSearchTranslations = {
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

export const deAlgoliaSearch: AlgoliaSearchTranslations = {
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

export const deAskAiSidePanel: AlgoliaAskAiSidePanelTranslations = {
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

export const de: VitePressLocalePack = {
  themeConfig: deThemeConfig,
  search: {
    local: { translations: deLocalSearch },
    algolia: { translations: deAlgoliaSearch },
    askAi: { sidePanel: deAskAiSidePanel }
  }
}
