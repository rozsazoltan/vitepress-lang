import type { AlgoliaSearchTranslations } from '../../types'

export default {
  button: {
    buttonText: "Rechercher",
    buttonAriaLabel: "Rechercher",
  },
  modal: {
    searchBox: {
      clearButtonTitle: "Effacer",
      clearButtonAriaLabel: "Effacer la recherche",
      closeButtonText: "Fermer",
      closeButtonAriaLabel: "Fermer",
      placeholderText: "Rechercher dans la doc ou demander à l'IA",
      placeholderTextAskAi: "Poser une autre question...",
      placeholderTextAskAiStreaming: "En train de répondre...",
      searchInputLabel: "Rechercher",
      backToKeywordSearchButtonText:
        "Retour à la recherche par mot-clé",
      backToKeywordSearchButtonAriaLabel:
        "Retour à la recherche par mot-clé",
      newConversationPlaceholder: "Poser une question",
      conversationHistoryTitle: "Historique de mes conversations",
      startNewConversationText: "Nouvelle conversation",
      viewConversationHistoryText: "Historique",
      threadDepthErrorPlaceholder: "Limite de conversation atteinte",
    },
    newConversation: {
      newConversationTitle: "Comment puis-je vous aider aujourd'hui ?",
      newConversationDescription:
        "Je vais rechercher dans votre documentation pour trouver rapidement des guides de configuration, des détails sur les fonctionnalités et des conseils de dépannage.",
    },
    footer: {
      selectText: "Sélectionner",
      submitQuestionText: "Soumettre la question",
      selectKeyAriaLabel: "Touche Entrée",
      navigateText: "Naviguer",
      navigateUpKeyAriaLabel: "Flèche vers le haut",
      navigateDownKeyAriaLabel: "Flèche vers le bas",
      closeText: "Fermer",
      backToSearchText: "Retour à la recherche",
      closeKeyAriaLabel: "Touche Échap",
      poweredByText: "",
    },
    errorScreen: {
      titleText: "Impossible de récupérer les résultats",
      helpText: "Vérifiez votre connexion réseau.",
    },
    startScreen: {
      recentSearchesTitle: "Récent",
      noRecentSearchesText: "Aucune recherche récente",
      saveRecentSearchButtonTitle: "Enregistrer cette recherche",
      removeRecentSearchButtonTitle:
        "Supprimer cette recherche de l'historique",
      favoriteSearchesTitle: "Favoris",
      removeFavoriteSearchButtonTitle: "Supprimer des favoris",
      recentConversationsTitle: "Conversations récentes",
      removeRecentConversationButtonTitle:
        "Supprimer cette conversation de l'historique",
    },
    noResultsScreen: {
      noResultsText: "Aucun résultat trouvé",
      suggestedQueryText: "Essayez de rechercher",
      reportMissingResultsText:
        "Vous pensez que cette requête devrait avoir des résultats ?",
      reportMissingResultsLinkText: "Dites-le nous.",
    },
    resultsScreen: {
      askAiPlaceholder: "Demander à l'IA :",
      noResultsAskAiPlaceholder:
        "Pas trouvé dans la doc ? Essayez Ask AI :",
    },
    askAiScreen: {
      disclaimerText:
        "Réponse générée par l'IA, peut contenir des erreurs. Vérifiez.",
      relatedSourcesText: "Sources associées",
      thinkingText: "Réflexion en cours...",
      copyButtonText: "Copier",
      copyButtonCopiedText: "Copié !",
      copyButtonTitle: "Copier",
      likeButtonTitle: "J'aime",
      dislikeButtonTitle: "Je n'aime pas",
      thanksForFeedbackText: "Merci pour votre retour !",
      preToolCallText: "Recherche en cours...",
      duringToolCallText: "Recherche en cours...",
      afterToolCallText: "Recherche effectuée",
      stoppedStreamingText: "Vous avez arrêté cette réponse",
      errorTitleText: "Erreur de chat",
      // threadDepthExceededMessage: "Cette conversation a été fermée pour maintenir la précision des réponses.",
      startNewConversationButtonText: "Nouvelle conversation",
    },
  },
} satisfies AlgoliaSearchTranslations
