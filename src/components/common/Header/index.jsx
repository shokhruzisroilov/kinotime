'use client'
import { useTranslation } from 'react-i18next'
import '@/app/i18n'

const Header = () => {
	const { t, i18n } = useTranslation()
	const handleChangeLang = lang => {
		i18n.changeLanguage(lang)
		// localStorage.setItem('lang', lang)
		document.documentElement.lang = lang
	}
	return (
		<div>
			<p>{t('welcome')}</p>
			<div>
				<button onClick={() => handleChangeLang('uz')}>Uzbek</button>
				<button onClick={() => handleChangeLang('ru')}>Русский</button>
				<button onClick={() => handleChangeLang('en')}>English</button>
			</div>
		</div>
	)
}

export default Header
