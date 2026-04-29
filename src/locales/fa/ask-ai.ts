import type { AlgoliaAskAiSidePanelTranslations } from '../../types'

export default {
  button: {
    translations: {
      buttonText: 'پرسش از هوش مصنوعی',
      buttonAriaLabel: 'پرسش از هوش مصنوعی',
    },
  },
  panel: {
    translations: {
      header: {
        title: 'پرسش از هوش مصنوعی',
        conversationHistoryTitle: 'تاریخچه گفت‌وگوی من',
        newConversationText: 'شروع گفت‌وگوی جدید',
        viewConversationHistoryText: 'تاریخچه گفت‌وگو',
      },
      promptForm: {
        promptPlaceholderText: 'سؤالی بپرسید',
        promptAnsweringText: 'در حال پاسخ‌گویی...',
        promptAskAnotherQuestionText: 'پرسش دیگری بپرسید',
        promptDisclaimerText: 'پاسخ‌ها توسط هوش مصنوعی تولید می‌شوند و ممکن است خطا داشته باشند.',
        promptLabelText: 'برای ارسال Enter و برای خط جدید Shift+Enter را بزنید.',
        promptAriaLabelText: 'ورودی پرامپت',
        threadDepthErrorPlaceholder: 'این گفت‌وگو به حد مجاز خود رسیده است',
        startNewConversationButtonText: 'شروع گفت‌وگوی جدید',
        threadDepthBannerContinueText: 'ادامه در گفت‌وگوی جدید',
      },
      conversationScreen: {
        preToolCallText: 'در حال جستجو...',
        searchingText: 'در حال جستجو...',
        toolCallResultText: 'جستجو شد',
        conversationDisclaimer: 'پاسخ‌ها توسط هوش مصنوعی تولید می‌شوند و ممکن است خطا داشته باشند. لطفاً بررسی کنید.',
        reasoningText: 'در حال استدلال...',
        thinkingText: 'در حال فکر کردن...',
        relatedSourcesText: 'منابع مرتبط',
        stoppedStreamingText: 'شما این پاسخ را متوقف کردید',
        copyButtonText: 'کپی',
        copyButtonCopiedText: 'کپی شد!',
        likeButtonTitle: 'پسندیدن',
        dislikeButtonTitle: 'نپسندیدن',
        thanksForFeedbackText: 'از بازخورد شما سپاسگزاریم!',
        errorTitleText: 'خطای گفت‌وگو',
        startNewConversationButtonText: 'شروع گفت‌وگوی جدید',
      },
      newConversationScreen: {
        titleText: 'امروز چطور می‌توانم کمک کنم؟',
        introductionText: 'در مستندات شما جستجو می‌کنم تا راهنماهای راه‌اندازی، جزئیات قابلیت‌ها و نکات عیب‌یابی را سریع‌تر پیدا کنید.',
      },
      logo: {
        poweredByText: 'قدرت‌گرفته از',
      },
    },
  },
} satisfies AlgoliaAskAiSidePanelTranslations
