import type { AlgoliaAskAiSidePanelTranslations } from '../../types'

export default {
  button: {
    translations: {
      buttonText: 'Zeptat se AI',
      buttonAriaLabel: 'Zeptat se AI',
    },
  },
  panel: {
    translations: {
      header: {
        title: 'Zeptat se AI',
        conversationHistoryTitle: 'Moje historie konverzací',
        newConversationText: 'Zahájit novou konverzaci',
        viewConversationHistoryText: 'Historie konverzací',
      },
      promptForm: {
        promptPlaceholderText: 'Položte otázku',
        promptAnsweringText: 'Odpovídám...',
        promptAskAnotherQuestionText: 'Položte další otázku',
        promptDisclaimerText: 'Odpovědi generuje AI a mohou obsahovat chyby.',
        promptLabelText: 'Stiskněte Enter pro odeslání nebo Shift+Enter pro nový řádek.',
        promptAriaLabelText: 'Vstup promptu',
        threadDepthErrorPlaceholder: 'Tato konverzace dosáhla limitu',
        startNewConversationButtonText: 'Zahájit novou konverzaci',
        threadDepthBannerContinueText: 'Pokračovat v nové konverzaci',
      },
      conversationScreen: {
        preToolCallText: 'Hledám...',
        searchingText: 'Hledám...',
        toolCallResultText: 'Vyhledáno',
        conversationDisclaimer: 'Odpovědi generuje AI a mohou obsahovat chyby. Prosím ověřte je.',
        reasoningText: 'Uvažuji...',
        thinkingText: 'Přemýšlím...',
        relatedSourcesText: 'Související zdroje',
        stoppedStreamingText: 'Zastavili jste tuto odpověď',
        copyButtonText: 'Kopírovat',
        copyButtonCopiedText: 'Zkopírováno!',
        likeButtonTitle: 'Líbí se mi',
        dislikeButtonTitle: 'Nelíbí se mi',
        thanksForFeedbackText: 'Děkujeme za zpětnou vazbu!',
        errorTitleText: 'Chyba chatu',
        startNewConversationButtonText: 'Zahájit novou konverzaci',
      },
      newConversationScreen: {
        titleText: 'Jak vám dnes mohu pomoci?',
        introductionText: 'Prohledávám vaši dokumentaci, abyste rychle našli průvodce nastavením, detaily funkcí a tipy pro řešení problémů.',
      },
      logo: {
        poweredByText: 'Používá',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
