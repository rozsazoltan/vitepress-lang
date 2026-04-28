import type { AlgoliaAskAiSidePanelTranslations } from "../../types";

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
        promptDisclaimerText:
          'Las respuestas se generan con IA y pueden contener errores.',
        promptLabelText:
          'Pulsa Enter para enviar, o Shift+Enter para una nueva línea.',
        promptAriaLabelText: 'Entrada de prompt',
      },
      conversationScreen: {
        preToolCallText: 'Buscando...',
        searchingText: 'Buscando...',
        toolCallResultText: 'Buscado',
        conversationDisclaimer:
          'Las respuestas se generan con IA y pueden contener errores. Verifícalas.',
        reasoningText: 'Razonando...',
        thinkingText: 'Pensando...',
        relatedSourcesText: 'Fuentes relacionadas',
        stoppedStreamingText: 'Has detenido esta respuesta',
        copyButtonText: 'Copiar',
        copyButtonCopiedText: '¡Copiado!',
        likeButtonTitle: 'Me gusta',
        dislikeButtonTitle: 'No me gusta',
        thanksForFeedbackText: '¡Gracias por tu comentario!',
        errorTitleText: 'Error de chat',
      },
      newConversationScreen: {
        titleText: '¿Cómo puedo ayudarte hoy?',
        introductionText:
          'Busco en tu documentación para ayudarte a encontrar guías de configuración, detalles de funciones y consejos de solución de problemas rápidamente.',
      },
      logo: {
        poweredByText: 'Con la tecnología de',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
