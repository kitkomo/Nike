import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import userAPI from '../api/userAPI'

const Auth: React.FC = () => {
	const { pathname } = useLocation()
	const isLogin = pathname === '/login'

	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [isFetching, setIsFetching] = React.useState(false)

	const redirect = useNavigate()

	const auth = async () => {
		setIsFetching(true)
		let response
		if (isLogin) {
			response = await userAPI.login(email, password)
		} else {
			response = await userAPI.registration(email, password)
		}
		setIsFetching(false)
		if (response.status === 200) {
			console.log('lfllf')
			redirect('/shop')
		}
	}

	return (
		<div
			className='bg-black bg-opacity-30 bg-cover bg-center rounded-xl overflow-hidden'
			style={{ backgroundImage: `url('images/auth-bg-2.jpg')` }}
		>
			<div className='rounded-xl px-10 py-10 bg-black bg-opacity-30 h-full flex justify-center items-center'>
				<form
					className=' my-8 px-5 pt-10 pb-5 rounded-xl flex flex-col gap-6 w-full max-w-lg backdrop-blur-3xl'
					onSubmit={e => e.preventDefault()}
				>
					<h1 className='capitalize text-3xl font-bold text-slate-200'>
						{isLogin ? 'Sign In' : 'Sign Up'}
					</h1>
					{!isLogin && (
						<div className='flex flex-col'>
							<label
								htmlFor='name'
								className='capitalize text-lg font-medium mb-2 text-gray-300 opacity-60'
							>
								Full Name
							</label>
							<input
								type='text'
								id='name'
								placeholder='Enter full name'
								className='rounded-xl bg-gray-100 py-3 px-6'
							/>
						</div>
					)}
					<div className='flex flex-col'>
						<label
							htmlFor='email'
							className='text-lg font-medium mb-2 text-gray-300 opacity-60'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							placeholder='Enter email'
							className='rounded-xl bg-gray-100 py-3 px-6'
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className='flex flex-col'>
						<label
							htmlFor='password'
							className='text-lg font-medium mb-2 text-gray-300 opacity-60'
						>
							Password
						</label>
						<input
							type='password'
							id='password'
							placeholder='Enter password'
							className='rounded-xl bg-gray-100 py-3 px-6'
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<button onClick={auth} className='rounded-full px-2 py-2 text-white bg-black mt-3 hover:bg-primary transition-colors flex justify-center items-center'>
						{isFetching && <span className='animate-spin h-5 w-5 mr-3 inline-block border-white border-x-2 rounded-full '></span>}
						{isLogin ? 'Sign In' : 'Sign Up'}
					</button>
					<Link
						to={isLogin ? '/register' : '/login'}
						className='mt-2 text-sm underline text-gray-200 text-center'
					>
						{isLogin
							? "Don't have an acoount? Sign Up"
							: 'Have an acoount? Sign In'}
					</Link>
				</form>
			</div>
		</div>
	)
}

export default Auth
