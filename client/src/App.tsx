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
		<div className='bg-slate-100 pt-2 px-5 min-h-screen overflow-hidden'>
			<Header />
			{isHome.pathname === '/' && <Gallery />}

			<Routes>
				{isAuth &&
					authRoutes.map(route => (
						<Route path={route.path} element={route.element} />
					))}
				{publicRoutes.map(route => (
					<Route path={route.path} element={route.element} />
				))}
			</Routes>
			<Footer />
		</div>
	)
}

export default App
