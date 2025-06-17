import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa";

const Card471x269 = () => {
return (
	<div className='card471x269 w-[236px] h-[232px] md:w-[300px]  text-white   mx-auto'>
		<div className='w-[236px] h-[144px] md:w-[300px] md:h-[175px] relative mx-auto rounded-[10px]    overflow-hidden mb-[36px] '>
			<Image
				src='/image/Card471x269.jpg'
				alt='kino defould'
				fill
				className='object-cover'
			/>
		</div>
		<div className='leading-[120%]'>
			<h2 className='text-white font-bold text-[15px] '>Intersteller</h2>
			<p className='flex gap-[5px] font-bold text-[15px] text-[#A473FF] hover:underline  mt-[6.5px]'><FaStar className='text-[#FFC700]' /> 4.9 <span className='font-normal'>| Drama • Sci-fi</span> </p>
		</div>
	</div>
)
}

export default Card471x269
