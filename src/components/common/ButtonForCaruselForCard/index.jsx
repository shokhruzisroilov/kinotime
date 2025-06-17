'use client'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function ButtonForCard({ direction = 'right', onClick, className = '' }) {
  const Icon = direction === 'left' ? IoIosArrowBack : IoIosArrowForward

  const handleClick = (e) => {
    if (onClick) {
      onClick(e)
    } else {
      console.log(`Клик: ${direction === 'left' ? '←' : '→'}`)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={` rounded-full h-[67.11px] w-[67.11px] mx-auto flex items-center justify-center border border-white bg-[#3000774D]   ${
        direction === 'left' ? 'left-2' : 'right-2'
      } ${className}`}
    >
      <Icon className="text-[30px] text-white/75" />
    </button>
  )
}
