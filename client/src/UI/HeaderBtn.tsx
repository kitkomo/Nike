import React, { ReactNode } from 'react'

interface HeaderBtnProps {
	children: JSX.Element
}

const HeaderBtn: React.FC<HeaderBtnProps> = ({children}) => {
	return (
		<button>
			<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6 stroke-additional hover:stroke-primary'
				>
		
				{children}
				</svg>
			</button>
	)
}

export default HeaderBtn