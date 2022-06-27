import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { CardDisplay } from './pages/CardDisplay'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='foods' element={<CardDisplay />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
