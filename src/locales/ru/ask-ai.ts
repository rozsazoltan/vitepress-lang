import type { AlgoliaAskAiSidePanelTranslations } from '../../types'

export default {
  button: {
    translations: {
      buttonText: 'Спросить ИИ',
      buttonAriaLabel: 'Спросить ИИ',
    },
  },
  panel: {
    translations: {
      header: {
        title: 'Спросить ИИ',
        conversationHistoryTitle: 'Моя история разговоров',
        newConversationText: 'Начать новый разговор',
        viewConversationHistoryText: 'История разговоров',
      },
      promptForm: {
        promptPlaceholderText: 'Задайте вопрос',
        promptAnsweringText: 'Отвечаю...',
        promptAskAnotherQuestionText: 'Задайте другой вопрос',
        promptDisclaimerText: 'Ответы генерируются ИИ и могут содержать ошибки.',
        promptLabelText: 'Нажмите Enter для отправки или Shift+Enter для новой строки.',
        promptAriaLabelText: 'Поле ввода запроса',
      },
      conversationScreen: {
        preToolCallText: 'Поиск...',
        searchingText: 'Поиск...',
        toolCallResultText: 'Поиск выполнен',
        conversationDisclaimer: 'Ответы генерируются ИИ и могут содержать ошибки. Пожалуйста, проверяйте.',
        reasoningText: 'Рассуждаю...',
        thinkingText: 'Думаю...',
        relatedSourcesText: 'Связанные источники',
        stoppedStreamingText: 'Вы остановили этот ответ',
        copyButtonText: 'Копировать',
        copyButtonCopiedText: 'Скопировано!',
        likeButtonTitle: 'Нравится',
        dislikeButtonTitle: 'Не нравится',
        thanksForFeedbackText: 'Спасибо за отзыв!',
        errorTitleText: 'Ошибка чата',
      },
      newConversationScreen: {
        titleText: 'Чем я могу помочь сегодня?',
        introductionText: 'Я ищу по вашей документации, чтобы быстро находить руководства по настройке, детали функций и советы по устранению неполадок.',
      },
      logo: {
        poweredByText: 'Работает на',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
