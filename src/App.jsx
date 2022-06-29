import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { CardDisplay } from './pages/CardDisplay'
import { AuthProvider } from './context/AuthContext'
import { ProtectedLayout } from './components/ProtectedLayout'

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/foods'
						element={
							<ProtectedLayout redirectTo={'/'}>
								<CardDisplay />
							</ProtectedLayout>
						}
					/>
					<Route
						path='/people'
						element={
							<ProtectedLayout redirectTo={'/'}>
								<CardDisplay />
							</ProtectedLayout>
						}
					/>
					<Route
						path='/places'
						element={
							<ProtectedLayout redirectTo={'/'}>
								<CardDisplay />
							</ProtectedLayout>
						}
					/>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	)
}

export default App
