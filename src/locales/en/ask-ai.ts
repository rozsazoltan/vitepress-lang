import type { AlgoliaAskAiSidePanelTranslations } from "../../types";

export default {
  button: {
    translations: {
      buttonText: 'Ask AI',
      buttonAriaLabel: 'Ask AI',
    },
  },
  panel: {
    translations: {
      header: {
        title: 'Ask AI',
        conversationHistoryTitle: 'My conversation history',
        newConversationText: 'Start a new conversation',
        viewConversationHistoryText: 'Conversation history',
      },
      promptForm: {
        promptPlaceholderText: 'Ask a question',
        promptAnsweringText: 'Answering...',
        promptAskAnotherQuestionText: 'Ask another question',
        promptDisclaimerText: 'Answers are AI-generated and may contain errors.',
        promptLabelText: 'Press Enter to send, or Shift+Enter for a new line.',
        promptAriaLabelText: 'Prompt input',
      },
      conversationScreen: {
        preToolCallText: 'Searching...',
        searchingText: 'Searching...',
        toolCallResultText: 'Searched',
        conversationDisclaimer: 'Answers are AI-generated and may contain errors. Please verify.',
        reasoningText: 'Reasoning...',
        thinkingText: 'Thinking...',
        relatedSourcesText: 'Related sources',
        stoppedStreamingText: 'You stopped this response',
        copyButtonText: 'Copy',
        copyButtonCopiedText: 'Copied!',
        likeButtonTitle: 'Like',
        dislikeButtonTitle: 'Dislike',
        thanksForFeedbackText: 'Thanks for your feedback!',
        errorTitleText: 'Chat error',
      },
      newConversationScreen: {
        titleText: 'How can I help you today?',
        introductionText:
          'I search your documentation to help you quickly find setup guides, feature details, and troubleshooting tips.',
      },
      logo: {
        poweredByText: 'Powered by',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
