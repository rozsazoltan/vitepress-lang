import type { AlgoliaSearchTranslations } from '../../types'

export default {
  button: {
    buttonText: 'Search',
    buttonAriaLabel: 'Search',
  },
  modal: {
    searchBox: {
      clearButtonTitle: 'Clear',
      clearButtonAriaLabel: 'Clear the query',
      closeButtonText: 'Close',
      closeButtonAriaLabel: 'Close',
      placeholderText: undefined, // fallback: 'Search docs' or 'Search docs or ask AI a question'
      placeholderTextAskAi: undefined, // fallback: 'Ask another question...'
      placeholderTextAskAiStreaming: 'Answering...',
      // can only be one of the following
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/enterkeyhint#value
      enterKeyHint: 'search',
      enterKeyHintAskAi: 'enter',
      searchInputLabel: 'Search',
      backToKeywordSearchButtonText: 'Back to keyword search',
      backToKeywordSearchButtonAriaLabel: 'Back to keyword search',
      newConversationPlaceholder: 'Ask a question',
      conversationHistoryTitle: 'My conversation history',
      startNewConversationText: 'Start a new conversation',
      viewConversationHistoryText: 'Conversation history',
      threadDepthErrorPlaceholder: 'This conversation has reached its limit',
    },
    startScreen: {
      recentSearchesTitle: 'Recent',
      noRecentSearchesText: 'No recent searches',
      saveRecentSearchButtonTitle: 'Save this search',
      removeRecentSearchButtonTitle: 'Remove this search from history',
      favoriteSearchesTitle: 'Favorite',
      removeFavoriteSearchButtonTitle: 'Remove this search from favorites',
      recentConversationsTitle: 'Recent conversations',
      removeRecentConversationButtonTitle:
        'Remove this conversation from history',
    },
    errorScreen: {
      titleText: 'Unable to fetch results',
      helpText: 'You might want to check your network connection.',
    },
    noResultsScreen: {
      noResultsText: 'No results found for',
      suggestedQueryText: 'Try searching for',
      reportMissingResultsText: 'Believe this query should return results?',
      reportMissingResultsLinkText: 'Let us know.',
    },
    resultsScreen: {
      askAiPlaceholder: 'Ask AI: ',
      noResultsAskAiPlaceholder: 'Didn\'t find it in the docs? Ask AI to help: ',
    },
    askAiScreen: {
      disclaimerText:
        'Answers are generated with AI which can make mistakes. Verify responses.',
      relatedSourcesText: 'Related sources',
      thinkingText: 'Thinking...',
      copyButtonText: 'Copy',
      copyButtonCopiedText: 'Copied!',
      copyButtonTitle: 'Copy',
      likeButtonTitle: 'Like',
      dislikeButtonTitle: 'Dislike',
      thanksForFeedbackText: 'Thanks for your feedback!',
      preToolCallText: 'Searching...',
      duringToolCallText: 'Searching for ',
      afterToolCallText: 'Searched for',
      // If provided, these override the default rendering of aggregated tool calls:
      aggregatedToolCallNode: undefined, // (queries: string[], onSearchQueryClick: (query: string) => void) => React.ReactNode
      aggregatedToolCallText: undefined, // (queries: string[]) => { before?: string; separator?: string; lastSeparator?: string; after?: string }
      // Text to show when user has stopped streaming a message
      stoppedStreamingText: 'You stopped this response',
      errorTitleText: 'Chat error',
      startNewConversationButtonText: 'Start a new conversation',
    },
    footer: {
      selectText: 'Select',
      submitQuestionText: 'Submit question',
      selectKeyAriaLabel: 'Enter key',
      navigateText: 'Navigate',
      navigateUpKeyAriaLabel: 'Arrow up',
      navigateDownKeyAriaLabel: 'Arrow down',
      closeText: 'Close',
      backToSearchText: 'Back to search',
      closeKeyAriaLabel: 'Escape key',
      poweredByText: 'Powered by',
    },
    newConversation: {
      newConversationTitle: 'How can I help you today?',
      newConversationDescription: 'I search through your documentation to help you find setup guides, feature details and troubleshooting tips, fast.'
    }
  },
} satisfies AlgoliaSearchTranslations
