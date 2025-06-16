'use client'
import { useTranslation } from 'react-i18next'
import Card from './Components/common/Card'
import './i18n'

export default function Home() {
  const { t, i18n } = useTranslation()
  return (
    <div className='text-white'>
       <p>{t('welcome')}</p>
      <button onClick={() => i18n.changeLanguage('ru')}>RU</button>
      <button onClick={() => i18n.changeLanguage('uz')}>UZ</button>
      <Card/>
    </div>
  );
}
