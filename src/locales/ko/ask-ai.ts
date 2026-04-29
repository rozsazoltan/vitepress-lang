import type { AlgoliaAskAiSidePanelTranslations } from '../../types'

export default {
  button: {
    translations: {
      buttonText: 'AI에게 묻기',
      buttonAriaLabel: 'AI에게 묻기',
    },
  },
  panel: {
    translations: {
      header: {
        title: 'AI에게 묻기',
        conversationHistoryTitle: '내 대화 기록',
        newConversationText: '새 대화 시작',
        viewConversationHistoryText: '대화 기록',
      },
      promptForm: {
        promptPlaceholderText: '질문하기',
        promptAnsweringText: '답변 중...',
        promptAskAnotherQuestionText: '다른 질문하기',
        promptDisclaimerText: '답변은 AI가 생성하며 오류가 있을 수 있습니다.',
        promptLabelText: 'Enter로 보내고 Shift+Enter로 줄을 바꿉니다.',
        promptAriaLabelText: '프롬프트 입력',
        threadDepthErrorPlaceholder: '이 대화가 한도에 도달했습니다',
        startNewConversationButtonText: '새 대화 시작',
        threadDepthBannerContinueText: '새 대화에서 계속하기',
      },
      conversationScreen: {
        preToolCallText: '검색 중...',
        searchingText: '검색 중...',
        toolCallResultText: '검색함',
        conversationDisclaimer: '답변은 AI가 생성하며 오류가 있을 수 있습니다. 확인해 주세요.',
        reasoningText: '추론 중...',
        thinkingText: '생각 중...',
        relatedSourcesText: '관련 소스',
        stoppedStreamingText: '이 응답을 중지했습니다',
        copyButtonText: '복사',
        copyButtonCopiedText: '복사됨!',
        likeButtonTitle: '좋아요',
        dislikeButtonTitle: '싫어요',
        thanksForFeedbackText: '피드백 감사합니다!',
        errorTitleText: '채팅 오류',
        startNewConversationButtonText: '새 대화 시작',
      },
      newConversationScreen: {
        titleText: '오늘 무엇을 도와드릴까요?',
        introductionText: '문서를 검색해 설정 가이드, 기능 상세 정보, 문제 해결 팁을 빠르게 찾을 수 있도록 도와드립니다.',
      },
      logo: {
        poweredByText: 'Powered by',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
