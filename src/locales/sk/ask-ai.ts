import type { AlgoliaAskAiSidePanelTranslations } from '../../types'

export default {
  button: {
    translations: {
      buttonText: 'Opýtať sa AI',
      buttonAriaLabel: 'Opýtať sa AI',
    },
  },
  panel: {
    translations: {
      header: {
        title: 'Opýtať sa AI',
        conversationHistoryTitle: 'Moja história konverzácií',
        newConversationText: 'Začať novú konverzáciu',
        viewConversationHistoryText: 'História konverzácií',
      },
      promptForm: {
        promptPlaceholderText: 'Položte otázku',
        promptAnsweringText: 'Odpovedám...',
        promptAskAnotherQuestionText: 'Položte ďalšiu otázku',
        promptDisclaimerText: 'Odpovede generuje AI a môžu obsahovať chyby.',
        promptLabelText: 'Stlačte Enter na odoslanie alebo Shift+Enter pre nový riadok.',
        promptAriaLabelText: 'Vstup promptu',
      },
      conversationScreen: {
        preToolCallText: 'Hľadám...',
        searchingText: 'Hľadám...',
        toolCallResultText: 'Vyhľadané',
        conversationDisclaimer: 'Odpovede generuje AI a môžu obsahovať chyby. Overte ich, prosím.',
        reasoningText: 'Uvažujem...',
        thinkingText: 'Premýšľam...',
        relatedSourcesText: 'Súvisiace zdroje',
        stoppedStreamingText: 'Zastavili ste túto odpoveď',
        copyButtonText: 'Kopírovať',
        copyButtonCopiedText: 'Skopírované!',
        likeButtonTitle: 'Páči sa mi',
        dislikeButtonTitle: 'Nepáči sa mi',
        thanksForFeedbackText: 'Ďakujeme za spätnú väzbu!',
        errorTitleText: 'Chyba chatu',
      },
      newConversationScreen: {
        titleText: 'Ako vám dnes môžem pomôcť?',
        introductionText: 'Prehľadávam vašu dokumentáciu, aby ste rýchlo našli návody na nastavenie, detaily funkcií a tipy na riešenie problémov.',
      },
      logo: {
        poweredByText: 'Používa',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
