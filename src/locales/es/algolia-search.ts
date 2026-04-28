import type { AlgoliaSearchTranslations } from '../../types'

export default {
  button: {
    buttonText: 'Buscar',
    buttonAriaLabel: 'Buscar'
  },
  modal: {
    searchBox: {
      clearButtonTitle: 'Limpiar',
      clearButtonAriaLabel: 'Borrar la consulta',
      closeButtonText: 'Cerrar',
      closeButtonAriaLabel: 'Cerrar',
      placeholderText: 'Buscar en la documentación o preguntar a Ask AI',
      placeholderTextAskAi: 'Haz otra pregunta...',
      placeholderTextAskAiStreaming: 'Respondiendo...',
      searchInputLabel: 'Buscar',
      backToKeywordSearchButtonText:
        'Volver a la búsqueda por palabras clave',
      backToKeywordSearchButtonAriaLabel:
        'Volver a la búsqueda por palabras clave',
      newConversationPlaceholder: 'Haz una pregunta',
      conversationHistoryTitle: 'Mi historial de conversaciones',
      startNewConversationText: 'Iniciar una nueva conversación',
      viewConversationHistoryText: 'Historial de conversaciones',
      threadDepthErrorPlaceholder: 'Se alcanzó el límite de conversación'
    },
    newConversation: {
      newConversationTitle: '¿Cómo puedo ayudarte hoy?',
      newConversationDescription:
        'Busco en tu documentación para ayudarte a encontrar guías de configuración, detalles de funciones y consejos de solución de problemas rápidamente.'
    },
    footer: {
      selectText: 'Seleccionar',
      submitQuestionText: 'Enviar pregunta',
      selectKeyAriaLabel: 'Tecla Enter',
      navigateText: 'Navegar',
      navigateUpKeyAriaLabel: 'Flecha arriba',
      navigateDownKeyAriaLabel: 'Flecha abajo',
      closeText: 'Cerrar',
      backToSearchText: 'Volver a la búsqueda',
      closeKeyAriaLabel: 'Tecla Escape',
      poweredByText: 'Con la tecnología de'
    },
    errorScreen: {
      titleText: 'No se pueden obtener resultados',
      helpText: 'Puede que quieras comprobar tu conexión de red.'
    },
    startScreen: {
      recentSearchesTitle: 'Recientes',
      noRecentSearchesText: 'No hay búsquedas recientes',
      saveRecentSearchButtonTitle: 'Guardar esta búsqueda',
      removeRecentSearchButtonTitle: 'Eliminar esta búsqueda del historial',
      favoriteSearchesTitle: 'Favoritos',
      removeFavoriteSearchButtonTitle:
        'Eliminar esta búsqueda de favoritos',
      recentConversationsTitle: 'Conversaciones recientes',
      removeRecentConversationButtonTitle:
        'Eliminar esta conversación del historial'
    },
    noResultsScreen: {
      noResultsText: 'No se encontraron resultados para',
      suggestedQueryText: 'Intenta buscar',
      reportMissingResultsText:
        '¿Crees que esta consulta debería devolver resultados?',
      reportMissingResultsLinkText: 'Avísanos.'
    },
    resultsScreen: {
      askAiPlaceholder: 'Preguntar a la IA: ',
      noResultsAskAiPlaceholder:
        '¿No lo encontraste en la documentación? Pide ayuda a Ask AI: '
    },
    askAiScreen: {
      disclaimerText:
        'Las respuestas se generan con IA y pueden contener errores. Verifícalas.',
      relatedSourcesText: 'Fuentes relacionadas',
      thinkingText: 'Pensando...',
      copyButtonText: 'Copiar',
      copyButtonCopiedText: '¡Copiado!',
      copyButtonTitle: 'Copiar',
      likeButtonTitle: 'Me gusta',
      dislikeButtonTitle: 'No me gusta',
      thanksForFeedbackText: '¡Gracias por tu comentario!',
      preToolCallText: 'Buscando...',
      duringToolCallText: 'Buscando...',
      afterToolCallText: 'Buscado',
      stoppedStreamingText: 'Has detenido esta respuesta',
      errorTitleText: 'Error de chat',
      startNewConversationButtonText: 'Iniciar una nueva conversación'
    }
  }
} satisfies AlgoliaSearchTranslations
