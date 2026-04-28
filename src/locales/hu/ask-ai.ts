import type { AlgoliaAskAiSidePanelTranslations } from '../../types'

export default {
  button: {
    translations: {
      buttonText: 'Kérdezd az AI-t',
      buttonAriaLabel: 'Kérdezd az AI-t',
    },
  },
  panel: {
    translations: {
      header: {
        title: 'Kérdezd az AI-t',
        conversationHistoryTitle: 'Beszélgetési előzményeim',
        newConversationText: 'Új beszélgetés indítása',
        viewConversationHistoryText: 'Előzmények megtekintése',
      },
      promptForm: {
        promptPlaceholderText: 'Kérdés feltevése',
        promptAnsweringText: 'Válasz készül...',
        promptAskAnotherQuestionText: 'Tegyél fel még egy kérdést',
        promptDisclaimerText: 'A választ AI generálta, és tartalmazhat hibákat.',
        promptLabelText: 'Küldés Enterrel, sortörés Shift+Enterrel.',
        promptAriaLabelText: 'Kérdésmező',
      },
      conversationScreen: {
        preToolCallText: 'Keresés folyamatban...',
        searchingText: 'Keresés folyamatban...',
        toolCallResultText: 'Keresés kész',
        conversationDisclaimer: 'A választ AI generálta, és tartalmazhat hibákat. Kérjük, ellenőrizd.',
        reasoningText: 'Elemzés...',
        thinkingText: 'Gondolkodik...',
        relatedSourcesText: 'Kapcsolódó források',
        stoppedStreamingText: 'Leállítottad ezt a választ',
        copyButtonText: 'Másolás',
        copyButtonCopiedText: 'Másolva!',
        likeButtonTitle: 'Tetszik',
        dislikeButtonTitle: 'Nem tetszik',
        thanksForFeedbackText: 'Köszönjük a visszajelzést!',
        errorTitleText: 'Csevegési hiba',
      },
      newConversationScreen: {
        titleText: 'Miben segíthetek ma?',
        introductionText: 'Átkutatom a dokumentációdat, és gyorsan segítek a beállítási útmutatókkal, funkcióleírásokkal és hibaelhárítási tippekkel.',
      },
      logo: {
        poweredByText: 'Működteti',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
