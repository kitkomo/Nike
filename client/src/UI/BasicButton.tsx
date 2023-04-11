import React from 'react'
import { Link } from 'react-router-dom'

interface BasicButtonProps {
	children: string
	to: string
}

const BasicButton: React.FC<BasicButtonProps> = ({ children, to }) => {
	return (
		<Link to={to}>
			<button className='bg-black text-white rounded-full py-1 px-5 hover:px-10 transition-all'>
				{children}
			</button>
		</Link>
	)
}

export default BasicButton
