import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { AuthContext } from '../../context/AuthContext'
import { Api } from '../../services/api'
import { urlBuilder } from '../../utils/urlBuilder'

import './style.css'

export function CardDisplay() {
	const [cards, setCards] = useState([])
	const auth = useContext(AuthContext)
	const path = window.location.pathname

	useEffect(() => {
		Api.get(`http://localhost:1337${path}`, {
			headers: {
				Authorization: `Bearer ${auth.token}`,
			},
		})
			.then((res) => {
				setCards(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [path])

	function handleTitle(path) {
		if (path === '/foods') {
			return 'FOODS'
		} else if (path === '/people') {
			return 'PEOPLE'
		} else if (path === '/places') {
			return 'PLACES'
		}
	}

	return (
		<>
			<Header />
			<div className='cardDisplay'>
				<p className='cardTitle'>LIST OF {handleTitle(path)}</p>
				<div className='cardGrid'>
					{cards.map((card) => {
						return (
							<div className='cardGridItem' key={card.id}>
								<img src={urlBuilder(card.link.url)} alt='' />
								<p className='cardText'>{card.name}</p>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}
