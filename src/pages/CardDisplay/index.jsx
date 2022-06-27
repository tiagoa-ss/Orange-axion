import { Header } from '../../components/Header'

import './style.css'

export function CardDisplay() {
	return (
		<>
			<Header />
			<div className='cardDisplay'>
				<p className='cardTitle'>LIST OF FOODS</p>
				<div className='cardGrid'>
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
