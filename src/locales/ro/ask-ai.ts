import type { AlgoliaAskAiSidePanelTranslations } from '../../types'

export default {
  button: {
    translations: {
      buttonText: 'Întreabă AI',
      buttonAriaLabel: 'Întreabă AI',
    },
  },
  panel: {
    translations: {
      header: {
        title: 'Întreabă AI',
        conversationHistoryTitle: 'Istoricul conversațiilor mele',
        newConversationText: 'Începe o conversație nouă',
        viewConversationHistoryText: 'Istoricul conversațiilor',
      },
      promptForm: {
        promptPlaceholderText: 'Pune o întrebare',
        promptAnsweringText: 'Se răspunde...',
        promptAskAnotherQuestionText: 'Pune altă întrebare',
        promptDisclaimerText: 'Răspunsurile sunt generate de AI și pot conține erori.',
        promptLabelText: 'Apasă Enter pentru trimitere sau Shift+Enter pentru linie nouă.',
        promptAriaLabelText: 'Câmp prompt',
        threadDepthErrorPlaceholder: 'Această conversație a atins limita',
        startNewConversationButtonText: 'Începe o conversație nouă',
        threadDepthBannerContinueText: 'Continuă într-o conversație nouă',
      },
      conversationScreen: {
        preToolCallText: 'Se caută...',
        searchingText: 'Se caută...',
        toolCallResultText: 'Căutat',
        conversationDisclaimer: 'Răspunsurile sunt generate de AI și pot conține erori. Te rugăm să verifici.',
        reasoningText: 'Raționare...',
        thinkingText: 'Se gândește...',
        relatedSourcesText: 'Surse asociate',
        stoppedStreamingText: 'Ai oprit acest răspuns',
        copyButtonText: 'Copiază',
        copyButtonCopiedText: 'Copiat!',
        likeButtonTitle: 'Apreciază',
        dislikeButtonTitle: 'Nu aprecia',
        thanksForFeedbackText: 'Mulțumim pentru feedback!',
        errorTitleText: 'Eroare de chat',
        startNewConversationButtonText: 'Începe o conversație nouă',
      },
      newConversationScreen: {
        titleText: 'Cu ce te pot ajuta astăzi?',
        introductionText: 'Caut în documentația ta pentru a te ajuta să găsești rapid ghiduri de configurare, detalii despre funcții și sfaturi de depanare.',
      },
      logo: {
        poweredByText: 'Susținut de',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
