'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FiMenu, FiSearch } from 'react-icons/fi'
import navLinks from '@/constants/navLinks'
import LanguagesSwitcher from './LanguagesSwitcher'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '@/app/i18n'
import SearchModal from './SearchModal'

const Navbar = ({ openNav }) => {
	const { t, i18n } = useTranslation()
	const [navBg, setNavBg] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 1024)
		checkMobile()
		window.addEventListener('resize', checkMobile)

		const handler = () => {
			if (window.scrollY >= 90) {
				setNavBg(true)
			} else {
				setNavBg(false)
			}
		}
		window.addEventListener('scroll', handler)

		return () => {
			window.removeEventListener('resize', checkMobile)
			window.removeEventListener('scroll', handler)
		}
	}, [])

	return (
		<div
			className={`${
				navBg || isMobile ? 'bg-[#000]' : 'bg-transparent'
			} fixed w-full z-[10] transition-all duration-300 top-0 flex items-center justify-between h-20 lg:h-32 px-6 md:px-10 xl:px-16`}
		>
			{/* Logo */}
			<Link href='/'>
				<Image
					src='/image/logo@2x.png'
					alt='Logo'
					width={187}
					height={57}
					className='cursor-pointer max-xl:w-[127px] max-xl:h-[30px] '
				/>
			</Link>

			{/* Navigation */}
			<nav className='max-lg:hidden'>
				<ul className='flex items-center lg:gap-8 xl:gap-10 2xl:gap-12'>
					{navLinks.map(link => (
						<li key={link.path}>
							<Link
								href={link.path}
								className='font-normal lg:text-base xl:text-xl 2xl:text-2xl leading-[120%] tracking-[0]  hover:text-yellow-400'
							>
								{t(link.title)}
							</Link>
						</li>
					))}
				</ul>
			</nav>

			{/* Search & Language Switch */}
			<div className='flex items-center gap-5'>
				{/* Search modal */}
				<SearchModal />
				{/* Switch Languages */}
				<LanguagesSwitcher />
				{/* Humburger menu */}
				<FiMenu
					onClick={openNav}
					className='text-4xl cursor-pointer lg:hidden'
				/>
			</div>
		</div>
	)
}

export default Navbar
