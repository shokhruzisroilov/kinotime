import Image from 'next/image'

const Card = () => {
	return (
		<div className='w-[200px] h-[326px]   mx-auto  '>
			<div className='Cara-image w-[200px] h-[260px]   relative  mx-auto rounded-tr-[28px] rounded-bl-[28px]'>
				<Image
					src='/image/kinoDefould.png'
					alt='kino defould'
					fill
					className='object-cover'
				/>
			</div>
			<div className='Card-info mt-[20px] leading-[120%]'>
				<h2 className='font-poppins text-white font-normal text-[23px] '>
					Deadpool & Wolverine
				</h2>
				<p className='text-[#A473FF] font-bold text-[15px] mt-[2px] hover:underline duration-300 hover:cursor-pointer'>
					Action • Sci-fi
				</p>
			</div>
		</div>
	)
}

export default Card
