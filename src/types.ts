export type SupportedLocale = 'de' | 'hu'

export type SearchProvider = 'local' | 'algolia'

export interface DefaultThemeLocaleConfig {
  outline: {
    label: string
  }
  docFooter: {
    prev: string
    next: string
  }
  editLink: {
    text: string
  }
  lastUpdated: {
    text: string
  }
  darkModeSwitchLabel: string
  lightModeSwitchTitle: string
  darkModeSwitchTitle: string
  sidebarMenuLabel: string
  returnToTopLabel: string
  langMenuLabel: string
  skipToContentLabel: string
}

export interface LocalSearchTranslations {
  button: {
    buttonText: string
    buttonAriaLabel: string
  }
  modal: {
    displayDetails: string
    resetButtonTitle: string
    backButtonTitle: string
    noResultsText: string
    footer: {
      selectText: string
      selectKeyAriaLabel: string
      navigateText: string
      navigateUpKeyAriaLabel: string
      navigateDownKeyAriaLabel: string
      closeText: string
      closeKeyAriaLabel: string
    }
  }
}

export interface AlgoliaSearchTranslations {
  button: {
    buttonText: string
    buttonAriaLabel: string
  }
  modal: {
    searchBox: {
      clearButtonTitle: string
      clearButtonAriaLabel: string
      closeButtonText: string
      closeButtonAriaLabel: string
      placeholderText: string
      placeholderTextAskAi: string
      placeholderTextAskAiStreaming: string
      searchInputLabel: string
      backToKeywordSearchButtonText: string
      backToKeywordSearchButtonAriaLabel: string
      newConversationPlaceholder: string
      conversationHistoryTitle: string
      startNewConversationText: string
      viewConversationHistoryText: string
      threadDepthErrorPlaceholder: string
    }
    newConversation: {
      newConversationTitle: string
      newConversationDescription: string
    }
    footer: {
      selectText: string
      submitQuestionText: string
      selectKeyAriaLabel: string
      navigateText: string
      navigateUpKeyAriaLabel: string
      navigateDownKeyAriaLabel: string
      closeText: string
      backToSearchText: string
      closeKeyAriaLabel: string
      poweredByText: string
    }
    errorScreen: {
      titleText: string
      helpText: string
    }
    startScreen: {
      recentSearchesTitle: string
      noRecentSearchesText: string
      saveRecentSearchButtonTitle: string
      removeRecentSearchButtonTitle: string
      favoriteSearchesTitle: string
      removeFavoriteSearchButtonTitle: string
      recentConversationsTitle: string
      removeRecentConversationButtonTitle: string
    }
    noResultsScreen: {
      noResultsText: string
      suggestedQueryText: string
      reportMissingResultsText: string
      reportMissingResultsLinkText: string
    }
    resultsScreen: {
      askAiPlaceholder: string
      noResultsAskAiPlaceholder: string
    }
    askAiScreen: {
      disclaimerText: string
      relatedSourcesText: string
      thinkingText: string
      copyButtonText: string
      copyButtonCopiedText: string
      copyButtonTitle: string
      likeButtonTitle: string
      dislikeButtonTitle: string
      thanksForFeedbackText: string
      preToolCallText: string
      duringToolCallText: string
      afterToolCallText: string
      stoppedStreamingText: string
      errorTitleText: string
      threadDepthExceededMessage: string
      startNewConversationButtonText: string
    }
  }
}

export interface AlgoliaAskAiSidePanelTranslations {
  button: {
    translations: {
      buttonText: string
      buttonAriaLabel: string
    }
  }
  panel: {
    translations: {
      header: {
        title: string
        conversationHistoryTitle: string
        newConversationText: string
        viewConversationHistoryText: string
      }
      promptForm: {
        promptPlaceholderText: string
        promptAnsweringText: string
        promptAskAnotherQuestionText: string
        promptDisclaimerText: string
        promptLabelText: string
        promptAriaLabelText: string
      }
      conversationScreen: {
        preToolCallText: string
        searchingText: string
        toolCallResultText: string
        conversationDisclaimer: string
        reasoningText: string
        thinkingText: string
        relatedSourcesText: string
        stoppedStreamingText: string
        copyButtonText: string
        copyButtonCopiedText: string
        likeButtonTitle: string
        dislikeButtonTitle: string
        thanksForFeedbackText: string
        errorTitleText: string
      }
      newConversationScreen: {
        titleText: string
        introductionText: string
      }
      logo: {
        poweredByText: string
      }
    }
  }
}

export interface VitePressLocalePack {
  label: string
  lang: string
  link: string
  themeConfig: DefaultThemeLocaleConfig
  search: {
    local: {
      translations: LocalSearchTranslations
    }
    algolia: {
      translations: AlgoliaSearchTranslations
    }
    askAi: {
      sidePanel: AlgoliaAskAiSidePanelTranslations
    }
  }
}

export interface DefineLangOptions {
  key?: string
  label?: string
  lang?: string
  link?: string
  searchProvider?: SearchProvider
}

export interface VitePressGeneratedLocaleConfig {
  label: string
  lang: string
  link?: string
  themeConfig: DefaultThemeLocaleConfig & {
    search: {
      provider: SearchProvider
      options: {
        locales: Record<string, unknown>
      }
    }
  }
}
