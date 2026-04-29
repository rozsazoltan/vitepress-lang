import type { AlgoliaAskAiSidePanelTranslations } from '../../types'

export default {
  button: {
    translations: {
      buttonText: '询问 AI',
      buttonAriaLabel: '询问 AI',
    },
  },
  panel: {
    translations: {
      header: {
        title: '询问 AI',
        conversationHistoryTitle: '我的对话历史',
        newConversationText: '开始新对话',
        viewConversationHistoryText: '对话历史',
      },
      promptForm: {
        promptPlaceholderText: '提问',
        promptAnsweringText: '正在回答...',
        promptAskAnotherQuestionText: '再问一个问题',
        promptDisclaimerText: '回答由 AI 生成，可能包含错误。',
        promptLabelText: '按 Enter 发送，或按 Shift+Enter 换行。',
        promptAriaLabelText: '提示词输入',
      },
      conversationScreen: {
        preToolCallText: '搜索中...',
        searchingText: '搜索中...',
        toolCallResultText: '已搜索',
        conversationDisclaimer: '回答由 AI 生成，可能包含错误。请核实。',
        reasoningText: '推理中...',
        thinkingText: '思考中...',
        relatedSourcesText: '相关来源',
        stoppedStreamingText: '你已停止此回答',
        copyButtonText: '复制',
        copyButtonCopiedText: '已复制！',
        likeButtonTitle: '赞',
        dislikeButtonTitle: '踩',
        thanksForFeedbackText: '感谢你的反馈！',
        errorTitleText: '聊天错误',
      },
      newConversationScreen: {
        titleText: '今天我能帮你做什么？',
        introductionText: '我会搜索你的文档，帮助你快速找到设置指南、功能详情和故障排查提示。',
      },
      logo: {
        poweredByText: '由以下提供支持',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
