import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { authRoutes, publicRoutes } from './routes'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

const App: React.FC = () => {
	const isAuth = false
	const isHome = useLocation()

	return (
		<div className='bg-slate-100  min-h-screen overflow-hidden flex flex-col'>
			<Header />
			{isHome.pathname === '/' && <Gallery />}
			<div className='mx-5 flex-grow'>
				<Routes>
					{isAuth &&
						authRoutes.map(route => (
							<Route path={route.path} element={route.element} />
						))}
					{publicRoutes.map(route => (
						<Route path={route.path} element={route.element} />
					))}
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default App
