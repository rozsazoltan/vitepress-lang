import type { AlgoliaAskAiSidePanelTranslations } from '../../types'

export default {
  button: {
    translations: {
      buttonText: 'AI kérdezése',
      buttonAriaLabel: 'AI kérdezése',
    },
  },
  panel: {
    translations: {
      header: {
        title: 'AI kérdezése',
        conversationHistoryTitle: 'Saját beszélgetési előzményeim',
        newConversationText: 'Új beszélgetés indítása',
        viewConversationHistoryText: 'Beszélgetési előzmények',
      },
      promptForm: {
        promptPlaceholderText: 'Tegyél fel egy kérdést',
        promptAnsweringText: 'Válaszol...',
        promptAskAnotherQuestionText: 'Tegyél fel egy másik kérdést',
        promptDisclaimerText: 'A válaszokat AI generálja, ezért hibákat tartalmazhatnak.',
        promptLabelText: 'Enter: küldés, Shift+Enter: új sor.',
        promptAriaLabelText: 'Prompt mező',
      },
      conversationScreen: {
        preToolCallText: 'Keresés...',
        searchingText: 'Keresés...',
        toolCallResultText: 'Keresve',
        conversationDisclaimer: 'A válaszokat AI generálja, ezért hibákat tartalmazhatnak. Kérlek, ellenőrizd őket.',
        reasoningText: 'Érvelés...',
        thinkingText: 'Gondolkodik...',
        relatedSourcesText: 'Kapcsolódó források',
        stoppedStreamingText: 'Leállítottad ezt a választ',
        copyButtonText: 'Másolás',
        copyButtonCopiedText: 'Másolva!',
        likeButtonTitle: 'Tetszik',
        dislikeButtonTitle: 'Nem tetszik',
        thanksForFeedbackText: 'Köszönjük a visszajelzést!',
        errorTitleText: 'Chat hiba',
      },
      newConversationScreen: {
        titleText: 'Miben segíthetek ma?',
        introductionText: 'Átnézem a dokumentációdat, hogy gyorsan megtaláld a beállítási útmutatókat, funkcióleírásokat és hibakeresési tippeket.',
      },
      logo: {
        poweredByText: 'Működteti',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
