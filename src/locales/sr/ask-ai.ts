import type { AlgoliaAskAiSidePanelTranslations } from '../../types'

export default {
  button: {
    translations: {
      buttonText: 'Pitaj AI',
      buttonAriaLabel: 'Pitaj AI',
    },
  },
  panel: {
    translations: {
      header: {
        title: 'Pitaj AI',
        conversationHistoryTitle: 'Moja istorija razgovora',
        newConversationText: 'Započni novi razgovor',
        viewConversationHistoryText: 'Istorija razgovora',
      },
      promptForm: {
        promptPlaceholderText: 'Postavi pitanje',
        promptAnsweringText: 'Odgovaranje...',
        promptAskAnotherQuestionText: 'Postavi drugo pitanje',
        promptDisclaimerText: 'Odgovore generiše AI i mogu sadržati greške.',
        promptLabelText: 'Pritisni Enter za slanje ili Shift+Enter za novi red.',
        promptAriaLabelText: 'Unos prompta',
        threadDepthErrorPlaceholder: 'Ova konverzacija je dostigla ograničenje',
        startNewConversationButtonText: 'Započni novu konverzaciju',
        threadDepthBannerContinueText: 'Nastavi u novoj konverzaciji',
      },
      conversationScreen: {
        preToolCallText: 'Pretraživanje...',
        searchingText: 'Pretraživanje...',
        toolCallResultText: 'Pretraženo',
        conversationDisclaimer: 'Odgovore generiše AI i mogu sadržati greške. Proveri ih.',
        reasoningText: 'Razlaganje...',
        thinkingText: 'Razmišljam...',
        relatedSourcesText: 'Povezani izvori',
        stoppedStreamingText: 'Zaustavio si ovaj odgovor',
        copyButtonText: 'Kopiraj',
        copyButtonCopiedText: 'Kopirano!',
        likeButtonTitle: 'Sviđa mi se',
        dislikeButtonTitle: 'Ne sviđa mi se',
        thanksForFeedbackText: 'Hvala na povratnoj informaciji!',
        errorTitleText: 'Greška u četu',
        startNewConversationButtonText: 'Započni novu konverzaciju',
      },
      newConversationScreen: {
        titleText: 'Kako mogu da pomognem danas?',
        introductionText: 'Pretražujem tvoju dokumentaciju da brzo pronađeš vodiče za podešavanje, detalje funkcija i savete za rešavanje problema.',
      },
      logo: {
        poweredByText: 'Pokreće',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
