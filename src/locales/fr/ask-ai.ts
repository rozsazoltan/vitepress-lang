import type { AlgoliaAskAiSidePanelTranslations } from "../../types";

export default {
  button: {
    translations: {
      buttonText: "Demander à l'IA",
      buttonAriaLabel: "Demander à l'IA",
    },
  },
  panel: {
    translations: {
      header: {
        title: "Demander à l'IA",
        conversationHistoryTitle: "Historique de mes conversations",
        newConversationText: "Nouvelle conversation",
        viewConversationHistoryText: "Historique",
      },
      promptForm: {
        promptPlaceholderText: "Poser une question",
        promptAnsweringText: "En train de répondre...",
        promptAskAnotherQuestionText: "Poser une autre question",
        promptDisclaimerText:
          "Réponse générée par l'IA, peut contenir des erreurs.",
        promptLabelText:
          "Entrée pour envoyer, Shift+Entrée pour saut de ligne.",
        promptAriaLabelText: "Saisie de question",
      },
      conversationScreen: {
        preToolCallText: "Recherche en cours...",
        searchingText: "Recherche en cours...",
        toolCallResultText: "Recherche effectuée",
        conversationDisclaimer:
          "Réponse générée par l'IA, peut contenir des erreurs. Vérifiez.",
        reasoningText: "Raisonnement en cours...",
        thinkingText: "Réflexion en cours...",
        relatedSourcesText: "Sources associées",
        stoppedStreamingText: "Vous avez arrêté cette réponse",
        copyButtonText: "Copier",
        copyButtonCopiedText: "Copié !",
        likeButtonTitle: "J'aime",
        dislikeButtonTitle: "Je n'aime pas",
        thanksForFeedbackText: "Merci pour votre retour !",
        errorTitleText: "Erreur de chat",
      },
      newConversationScreen: {
        titleText: "Comment puis-je vous aider aujourd'hui ?",
        introductionText:
          "Je vais rechercher dans votre documentation pour trouver rapidement des guides de configuration, des détails sur les fonctionnalités et des conseils de dépannage.",
      },
      logo: {
        poweredByText: "",
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
