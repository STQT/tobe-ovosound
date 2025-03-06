import { createI18n } from 'vue-i18n'

const messages = {
  en: { welcome: "Welcome" },
  uz: { welcome: "Xush kelibsiz" }
}

const i18n = createI18n({
  locale: 'uz',
  fallbackLocale: 'en',
  messages
})

export default i18n
