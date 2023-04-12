import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { authRoutes, publicRoutes } from './routes'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { RootStateContext } from './store/RootStore'

const App: React.FC = () => {
	const {userStore} = React.useContext(RootStateContext)
	const isHome = useLocation()

	return (
		<div className='bg-slate-100  min-h-screen overflow-hidden flex flex-col place-content-stretch'>
			<Header />
			{isHome.pathname === '/' && <Gallery />}
			<div className='mx-5 flex-grow grid grid-cols-1 grid-rows-1'>
				<Routes>
					{userStore.isAuth &&
						authRoutes.map(route => (
							<Route key={route.path} path={route.path} element={route.element} />
						))}
					{publicRoutes.map(route => (
						<Route key={route.path} path={route.path} element={route.element} />
					))}
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default App
