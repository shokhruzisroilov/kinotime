import Image from 'next/image'

const CardThisMonth = () => {
	return (
		
			<div className='Cara-image w-[267px] h-[384px]    relative  mx-auto  rounded-bl-[28px] rounded-tr-[28px] overflow-hidden'>
				<Image
					src='/image/kino2.png'
					alt='kino defould'
					fill
					className='object-cover'
				/>
			</div>
	)
}

export default CardThisMonth
