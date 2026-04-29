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
        newConversationText: 'Neues Gespräch starten',
        viewConversationHistoryText: 'Gesprächsverlauf',
      },
      promptForm: {
        promptPlaceholderText: 'Eine Frage stellen',
        promptAnsweringText: 'Antwortet...',
        promptAskAnotherQuestionText: 'Eine weitere Frage stellen',
        promptDisclaimerText: 'Antworten werden von KI generiert und können Fehler enthalten.',
        promptLabelText: 'Drücke Enter zum Senden oder Shift+Enter für eine neue Zeile.',
        promptAriaLabelText: 'Prompt-Eingabe',
        threadDepthErrorPlaceholder: 'Diese Unterhaltung hat ihr Limit erreicht',
        startNewConversationButtonText: 'Neue Unterhaltung starten',
        threadDepthBannerContinueText: 'In einer neuen Unterhaltung fortfahren',
      },
      conversationScreen: {
        preToolCallText: 'Suche...',
        searchingText: 'Suche...',
        toolCallResultText: 'Gesucht',
        conversationDisclaimer: 'Antworten werden von KI generiert und können Fehler enthalten. Bitte prüfen.',
        reasoningText: 'Begründung...',
        thinkingText: 'Denkt nach...',
        relatedSourcesText: 'Zugehörige Quellen',
        stoppedStreamingText: 'Du hast diese Antwort gestoppt',
        copyButtonText: 'Kopieren',
        copyButtonCopiedText: 'Kopiert!',
        likeButtonTitle: 'Gefällt mir',
        dislikeButtonTitle: 'Gefällt mir nicht',
        thanksForFeedbackText: 'Danke für dein Feedback!',
        errorTitleText: 'Chat-Fehler',
        startNewConversationButtonText: 'Neue Unterhaltung starten',
      },
      newConversationScreen: {
        titleText: 'Wie kann ich dir heute helfen?',
        introductionText: 'Ich durchsuche deine Dokumentation, damit du Einrichtungsanleitungen, Funktionsdetails und Tipps zur Fehlerbehebung schnell findest.',
      },
      logo: {
        poweredByText: 'Bereitgestellt von',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
