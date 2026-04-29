import type { AlgoliaAskAiSidePanelTranslations } from '../../types'

export default {
  button: {
    translations: {
      buttonText: 'AI に質問',
      buttonAriaLabel: 'AI に質問',
    },
  },
  panel: {
    translations: {
      header: {
        title: 'AI に質問',
        conversationHistoryTitle: '会話履歴',
        newConversationText: '新しい会話を開始',
        viewConversationHistoryText: '会話履歴',
      },
      promptForm: {
        promptPlaceholderText: '質問する',
        promptAnsweringText: '回答中...',
        promptAskAnotherQuestionText: '別の質問をする',
        promptDisclaimerText: '回答は AI によって生成され、誤りを含む場合があります。',
        promptLabelText: 'Enter で送信、Shift+Enter で改行します。',
        promptAriaLabelText: 'プロンプト入力',
        threadDepthErrorPlaceholder: 'この会話は上限に達しました',
        startNewConversationButtonText: '新しい会話を開始',
        threadDepthBannerContinueText: '新しい会話で続ける',
      },
      conversationScreen: {
        preToolCallText: '検索中...',
        searchingText: '検索中...',
        toolCallResultText: '検索しました',
        conversationDisclaimer: '回答は AI によって生成され、誤りを含む場合があります。確認してください。',
        reasoningText: '推論中...',
        thinkingText: '考え中...',
        relatedSourcesText: '関連ソース',
        stoppedStreamingText: 'この回答を停止しました',
        copyButtonText: 'コピー',
        copyButtonCopiedText: 'コピーしました！',
        likeButtonTitle: '高評価',
        dislikeButtonTitle: '低評価',
        thanksForFeedbackText: 'フィードバックありがとうございます！',
        errorTitleText: 'チャットエラー',
        startNewConversationButtonText: '新しい会話を開始',
      },
      newConversationScreen: {
        titleText: '今日はどのようにお手伝いできますか？',
        introductionText: 'ドキュメントを検索して、セットアップガイド、機能の詳細、トラブルシューティングのヒントをすばやく見つけます。',
      },
      logo: {
        poweredByText: 'Powered by',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
