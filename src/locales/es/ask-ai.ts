import type { AlgoliaAskAiSidePanelTranslations } from '../../types'

export default {
  button: {
    translations: {
      buttonText: 'Preguntar a la IA',
      buttonAriaLabel: 'Preguntar a la IA',
    },
  },
  panel: {
    translations: {
      header: {
        title: 'Preguntar a la IA',
        conversationHistoryTitle: 'Mi historial de conversaciones',
        newConversationText: 'Iniciar una nueva conversación',
        viewConversationHistoryText: 'Historial de conversaciones',
      },
      promptForm: {
        promptPlaceholderText: 'Haz una pregunta',
        promptAnsweringText: 'Respondiendo...',
        promptAskAnotherQuestionText: 'Haz otra pregunta',
        promptDisclaimerText: 'Las respuestas son generadas por IA y pueden contener errores.',
        promptLabelText: 'Pulsa Enter para enviar o Shift+Enter para una nueva línea.',
        promptAriaLabelText: 'Entrada del prompt',
        threadDepthErrorPlaceholder: 'Esta conversación ha alcanzado su límite',
        startNewConversationButtonText: 'Iniciar una nueva conversación',
        threadDepthBannerContinueText: 'Continuar en una nueva conversación',
      },
      conversationScreen: {
        preToolCallText: 'Buscando...',
        searchingText: 'Buscando...',
        toolCallResultText: 'Buscado',
        conversationDisclaimer: 'Las respuestas son generadas por IA y pueden contener errores. Verifícalas.',
        reasoningText: 'Razonando...',
        thinkingText: 'Pensando...',
        relatedSourcesText: 'Fuentes relacionadas',
        stoppedStreamingText: 'Detuviste esta respuesta',
        copyButtonText: 'Copiar',
        copyButtonCopiedText: '¡Copiado!',
        likeButtonTitle: 'Me gusta',
        dislikeButtonTitle: 'No me gusta',
        thanksForFeedbackText: '¡Gracias por tus comentarios!',
        errorTitleText: 'Error del chat',
        startNewConversationButtonText: 'Iniciar una nueva conversación',
      },
      newConversationScreen: {
        titleText: '¿Cómo puedo ayudarte hoy?',
        introductionText: 'Busco en tu documentación para ayudarte a encontrar rápidamente guías de configuración, detalles de funciones y consejos de solución de problemas.',
      },
      logo: {
        poweredByText: 'Con tecnología de',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
