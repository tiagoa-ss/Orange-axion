import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export function ProtectedLayout({ children, redirectTo }) {
	const auth = useContext(AuthContext)

	return auth.email ? children : <Navigate to={redirectTo} />
}
