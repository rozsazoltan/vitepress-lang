import type { AlgoliaAskAiSidePanelTranslations } from '../../types'

export default {
  button: {
    translations: {
      buttonText: 'Demander à l’IA',
      buttonAriaLabel: 'Demander à l’IA',
    },
  },
  panel: {
    translations: {
      header: {
        title: 'Demander à l’IA',
        conversationHistoryTitle: 'Mon historique de conversations',
        newConversationText: 'Démarrer une nouvelle conversation',
        viewConversationHistoryText: 'Historique des conversations',
      },
      promptForm: {
        promptPlaceholderText: 'Posez une question',
        promptAnsweringText: 'Réponse en cours...',
        promptAskAnotherQuestionText: 'Posez une autre question',
        promptDisclaimerText: 'Les réponses sont générées par l’IA et peuvent contenir des erreurs.',
        promptLabelText: 'Appuyez sur Entrée pour envoyer, ou Maj+Entrée pour une nouvelle ligne.',
        promptAriaLabelText: 'Champ de prompt',
        threadDepthErrorPlaceholder: 'Cette conversation a atteint sa limite',
        startNewConversationButtonText: 'Démarrer une nouvelle conversation',
        threadDepthBannerContinueText: 'Continuer dans une nouvelle conversation',
      },
      conversationScreen: {
        preToolCallText: 'Recherche...',
        searchingText: 'Recherche...',
        toolCallResultText: 'Recherche effectuée',
        conversationDisclaimer: 'Les réponses sont générées par l’IA et peuvent contenir des erreurs. Veuillez vérifier.',
        reasoningText: 'Raisonnement...',
        thinkingText: 'Réflexion...',
        relatedSourcesText: 'Sources liées',
        stoppedStreamingText: 'Vous avez arrêté cette réponse',
        copyButtonText: 'Copier',
        copyButtonCopiedText: 'Copié !',
        likeButtonTitle: 'J’aime',
        dislikeButtonTitle: 'Je n’aime pas',
        thanksForFeedbackText: 'Merci pour votre retour !',
        errorTitleText: 'Erreur de chat',
        startNewConversationButtonText: 'Démarrer une nouvelle conversation',
      },
      newConversationScreen: {
        titleText: 'Comment puis-je vous aider aujourd’hui ?',
        introductionText: 'Je parcours votre documentation pour vous aider à trouver rapidement des guides de configuration, des détails de fonctionnalités et des conseils de dépannage.',
      },
      logo: {
        poweredByText: 'Propulsé par',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
