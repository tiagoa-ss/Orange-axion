export function setUserLocalStorage(user) {
	localStorage.setItem('u', JSON.stringify(user))
}

export function getUserLocalStorage() {
	const userJson = localStorage.getItem('u')

	if (!userJson) {
		return null
	} else {
		const user = JSON.parse(userJson)
		return user
	}
}
