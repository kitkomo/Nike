import React from 'react'
import { Link } from 'react-router-dom'
import HeaderBtn from '../UI/HeaderBtn'
import Search from '../UI/Search'

const Header: React.FC = () => {
	return (
		<header className='bg-secondary my-3 px-14 py-2 rounded-full flex justify-between items-center shadow-2xl'>
			<Link to='/'>
			<img src='images/logo.svg' alt='nike' />
			</Link>
			<nav className='flex gap-7 items-center'>
				<Search/>
				<Link to='/favorites'>
				<HeaderBtn>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
					/>
				</HeaderBtn>
				</Link>
				<Link to='/cart'>
				<HeaderBtn>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
					/>
				</HeaderBtn>
				</Link>
				<Link to='/auth'>
				<HeaderBtn>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
					/>
				</HeaderBtn>
				</Link>
			</nav>
		</header>
	)
}

export default Header
