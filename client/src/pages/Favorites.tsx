import React from 'react'
import { RootStateContext } from '../store/RootStore'
import { Navigate } from 'react-router-dom'

const Favorites = () => {
	const { userStore } = React.useContext(RootStateContext)

	return (
		<>
			{!userStore.isAuth && <Navigate to='/login' replace={true} />}
			<div>Favorites</div>
		</>
	)
}

export default Favorites
