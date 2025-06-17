'use client'
import { useTranslation } from 'react-i18next'
import '@/app/i18n'

const LanguagesSwitcher = () => {
	const { t, i18n } = useTranslation()
	const handleChangeLang = lang => {
		i18n.changeLanguage(lang)
		// localStorage.setItem('lang', lang)
		document.documentElement.lang = lang
	}
	return (
		<div>
			<label htmlFor='lang-select' className='sr-only'>
				Select Language
			</label>
			<select
				id='lang-select'
				onChange={e => handleChangeLang(e.target.value)}
				className='bg-black text-white lg:text-base xl:text-xl border border-gray-500 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition'
				defaultValue={i18n.language}
			>
				<option value='uz'>UZ</option>
				<option value='ru'>RU</option>
				<option value='en'>EN</option>
			</select>
		</div>
	)
}

export default LanguagesSwitcher
