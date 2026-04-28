import type { AlgoliaAskAiSidePanelTranslations } from '../../types'

export default {
  button: {
    translations: {
      buttonText: 'KI fragen',
      buttonAriaLabel: 'KI fragen',
    },
  },
  panel: {
    translations: {
      header: {
        title: 'KI fragen',
        conversationHistoryTitle: 'Mein Gesprächsverlauf',
        newConversationText: 'Neues Gespräch beginnen',
        viewConversationHistoryText: 'Gesprächsverlauf',
      },
      promptForm: {
        promptPlaceholderText: 'Frage stellen',
        promptAnsweringText: 'Wird beantwortet...',
        promptAskAnotherQuestionText: 'Weitere Frage stellen',
        promptDisclaimerText: 'Antworten werden von KI generiert und können Fehler enthalten.',
        promptLabelText: 'Enter zum Senden, Shift+Enter für eine neue Zeile.',
        promptAriaLabelText: 'Prompt-Eingabe',
      },
      conversationScreen: {
        preToolCallText: 'Suche läuft...',
        searchingText: 'Suche läuft...',
        toolCallResultText: 'Gesucht',
        conversationDisclaimer: 'Antworten werden von KI generiert und können Fehler enthalten. Bitte überprüfen.',
        reasoningText: 'Analysiert...',
        thinkingText: 'Denkt nach...',
        relatedSourcesText: 'Verwandte Quellen',
        stoppedStreamingText: 'Sie haben diese Antwort gestoppt',
        copyButtonText: 'Kopieren',
        copyButtonCopiedText: 'Kopiert!',
        likeButtonTitle: 'Gefällt mir',
        dislikeButtonTitle: 'Gefällt mir nicht',
        thanksForFeedbackText: 'Danke für Ihr Feedback!',
        errorTitleText: 'Chat-Fehler',
      },
      newConversationScreen: {
        titleText: 'Wie kann ich Ihnen heute helfen?',
        introductionText: 'Ich durchsuche Ihre Dokumentation, um Ihnen schnell Setup-Anleitungen, Funktionsdetails und Tipps zur Fehlerbehebung zu finden.',
      },
      logo: {
        poweredByText: 'Bereitgestellt von',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
