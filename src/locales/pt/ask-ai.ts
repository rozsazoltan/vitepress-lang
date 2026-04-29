import type { AlgoliaAskAiSidePanelTranslations } from '../../types'

export default {
  button: {
    translations: {
      buttonText: 'Perguntar à IA',
      buttonAriaLabel: 'Perguntar à IA',
    },
  },
  panel: {
    translations: {
      header: {
        title: 'Perguntar à IA',
        conversationHistoryTitle: 'Meu histórico de conversas',
        newConversationText: 'Iniciar uma nova conversa',
        viewConversationHistoryText: 'Histórico de conversas',
      },
      promptForm: {
        promptPlaceholderText: 'Faça uma pergunta',
        promptAnsweringText: 'Respondendo...',
        promptAskAnotherQuestionText: 'Faça outra pergunta',
        promptDisclaimerText: 'As respostas são geradas por IA e podem conter erros.',
        promptLabelText: 'Pressione Enter para enviar ou Shift+Enter para uma nova linha.',
        promptAriaLabelText: 'Entrada do prompt',
        threadDepthErrorPlaceholder: 'Esta conversa atingiu o limite',
        startNewConversationButtonText: 'Iniciar uma nova conversa',
        threadDepthBannerContinueText: 'Continuar em uma nova conversa',
      },
      conversationScreen: {
        preToolCallText: 'Pesquisando...',
        searchingText: 'Pesquisando...',
        toolCallResultText: 'Pesquisado',
        conversationDisclaimer: 'As respostas são geradas por IA e podem conter erros. Verifique.',
        reasoningText: 'Raciocinando...',
        thinkingText: 'Pensando...',
        relatedSourcesText: 'Fontes relacionadas',
        stoppedStreamingText: 'Você interrompeu esta resposta',
        copyButtonText: 'Copiar',
        copyButtonCopiedText: 'Copiado!',
        likeButtonTitle: 'Curtir',
        dislikeButtonTitle: 'Não curtir',
        thanksForFeedbackText: 'Obrigado pelo feedback!',
        errorTitleText: 'Erro no chat',
        startNewConversationButtonText: 'Iniciar uma nova conversa',
      },
      newConversationScreen: {
        titleText: 'Como posso ajudar hoje?',
        introductionText: 'Pesquiso na sua documentação para ajudar você a encontrar rapidamente guias de configuração, detalhes de recursos e dicas de solução de problemas.',
      },
      logo: {
        poweredByText: 'Desenvolvido por',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
