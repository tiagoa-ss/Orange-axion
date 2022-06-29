import { createContext, useState, useEffect } from 'react'
import { Api } from '../../services/api'
import { setUserLocalStorage, getUserLocalStorage } from './utils'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
	const [user, setUser] = useState()

	useEffect(() => {
		const userLocal = getUserLocalStorage()

		if (userLocal) {
			setUser(userLocal)
		}
	}, [])

	function authenticate(email, password) {
		Api.post('http://localhost:1337/auth/local', {
			identifier: email,
			password,
		})
			.then((resp) => {
				const payload = { token: resp.data.jwt, email }

				setUser(payload)
				setUserLocalStorage(payload)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	function logout() {
		setUser(null)
		setUserLocalStorage(null)
	}

	return (
		<AuthContext.Provider value={{ ...user, authenticate, logout }}>
			{children}
		</AuthContext.Provider>
	)
}
