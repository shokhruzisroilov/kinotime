'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        translation: {
          welcome: 'Xush kelibsiz',
        },
      },
      ru: {
        translation: {
          welcome: 'Добро пожаловать',
        },
      },
    },
    lng: 'uz',
    fallbackLng: 'uz',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
