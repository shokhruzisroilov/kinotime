import navLinks from '@/constants/navLinks'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

const MobileNav = ({ closeNav, showNav }) => {
	const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'
	return (
		<div>
			{/* Overlay */}
			<div
				className={`${navOpen} transform transition-all duration-500 fixed inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
			></div>
			{/* Navlinks */}
			<div
				className={`${navOpen} transform transition-all duration-500 delay-300 text-white fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[1006] px-12 top-0 left-0`}
			>
				{navLinks.map(link => {
					return (
						<Link
							href={link.path}
							key={link.title}
							className='font-normal text-2xl leading-[120%] tracking-[0]  hover:text-yellow-400'
						>
							{link.title}
						</Link>
					)
				})}
				{/* Close button */}
				<CgClose
					onClick={closeNav}
					className='absolute top-6 right-6 text-4xl cursor-pointer'
				/>
			</div>
		</div>
	)
}

export default MobileNav
