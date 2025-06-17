import ButtonForCard from '@/components/common/ButtonForCaruselForCard'
import Card from '@/components/common/Card'
import Card471x269 from '@/components/common/Card471x269'
import CardThisMonth from '@/components/common/CardThisMonth'
import { Hero } from '@/components/section'

export default function Home() {
	return (
		<>
			<Hero />
			<div className=' flex'>
				<Card />
				<CardThisMonth />
				<Card471x269 />
				<ButtonForCard direction='right' />
				<ButtonForCard direction='left' />

			</div>
		</>
	)
}
