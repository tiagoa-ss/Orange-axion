import { Link } from 'react-router-dom'

import './style.css'

export function Header() {
	return (
		<header id='navHeader'>
			<div className='content'>
				<h1 id='navTitle'>ORANGE</h1>
				<ul id='navigation'>
					<Link className='navLink' to='/foods'>
						FOODS
					</Link>
					<Link className='navLink' to='/people'>
						PEOPLE
					</Link>
					<Link className='navLink' to='/places'>
						PLACES
					</Link>
				</ul>
			</div>
		</header>
	)
}
