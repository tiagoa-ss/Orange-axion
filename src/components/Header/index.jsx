import './style.css'

export function Header() {
	return (
		<header id='navHeader'>
			<div className='content'>
				<h1 id='navTitle'>ORANGE</h1>
				<ul id='navigation'>
					<li className='navLink'>FOODS</li>
					<li className='navLink'>PEOPLE</li>
					<li className='navLink'>PLACES</li>
				</ul>
			</div>
		</header>
	)
}
