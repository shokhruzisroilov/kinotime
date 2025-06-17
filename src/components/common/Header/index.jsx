'use client'
import { useState } from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNavbar'

const Header = () => {
	const [showNav, setShowNav] = useState(false)
	const showNavHandler = () => setShowNav(true)
	const closeNavHandler = () => setShowNav(false)

	return (
		<header>
			<Navbar openNav={showNavHandler} />
			<MobileNav showNav={showNav} closeNav={closeNavHandler} />
		</header>
	)
}

export default Header
