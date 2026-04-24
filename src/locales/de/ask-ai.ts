import type { AlgoliaAskAiSidePanelTranslations } from '../../types'

export default {
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
        introductionText: 'Ich durchsuche deine Dokumentation und helfe dir schnell bei Einrichtungsanleitungen, Funktionsdetails und Hinweisen zur Fehlerbehebung.'
      },
      logo: {
        poweredByText: 'Bereitgestellt von'
      }
    }
  }
} satisfies AlgoliaAskAiSidePanelTranslations
