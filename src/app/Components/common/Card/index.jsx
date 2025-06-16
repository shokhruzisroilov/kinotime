import Image from 'next/image'

const Card = () => {
	return (
		<div className='md:w-[267px] mx-auto h-[384px] '>
			<div className='Card-image w-[267px] h-[318px] relative bg-red-500 mx-auto rounded-tr-[28px] rounded-bl-[28px]'>
				<Image
					src='/image/kinoDefould.png'
					alt='kino defould'
					fill
					className='object-cover'
				/>
			</div>
			<div className="Card-info mt-[20px] leading-[120%]">
					<h2 className='font-poppins text-white font-normal text-[23px] '>Deadpool & Wolverine</h2>
					<p className='text-[#A473FF] font-bold text-[15px] mt-[2px] hover:underline duration-300 hover:cursor-pointer'>Action • Sci-fi</p>
			</div>
		</div>
	)
}

export default Card
