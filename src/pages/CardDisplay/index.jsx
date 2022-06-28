import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { urlBuilder } from '../../utils/urlBuilder'

import './style.css'

export function CardDisplay() {
	const [cards, setCards] = useState([])

	useEffect(() => {
		axios
			.get('http://localhost:1337/foods')
			.then((res) => {
				console.log(res.data)
				setCards(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<>
			<Header />
			<div className='cardDisplay'>
				<p className='cardTitle'>LIST OF FOODS</p>
				<div className='cardGrid'>
					{cards.map((card) => {
						return (
							<div className='cardGridItem' key={card.id}>
								<img src={urlBuilder(card.link.url)} alt='' />
								<p className='cardText'>{card.name}</p>
							</div>
						)
					})}
					{/* modelo de card
					 <div className='cardGridItem'>
						<img
							src='https://t1.rg.ltmcdn.com/pt/posts/1/5/1/bife_na_chapa_2151_orig.jpg'
							alt=''
						/>
						<p className='cardText'>Bife</p>
					</div> */}
				</div>
			</div>
		</>
	)
}
