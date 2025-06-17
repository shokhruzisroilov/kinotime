'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'

i18n
	.use(HttpBackend)
	.use(initReactI18next)
	.init({
		fallbackLng: 'uz',
		lng: 'uz',
		debug: false,
		interpolation: {
			escapeValue: false,
		},
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
		supportedLngs: ['uz', 'ru', 'en'],
	})

export default i18n