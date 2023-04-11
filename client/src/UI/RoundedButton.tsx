import React from 'react'

interface RoundedButtonProps {
	onClick: () => void
	children: JSX.Element
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ onClick, children }) => {
	return (
		<button onClick={onClick} className='bg-additional rounded-md p-1 group hover:bg-secondary hover:-translate-y-0.5 transition-transform hover:drop-shadow-lg'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-6 h-6 stroke-primary'
			>
				{children}
			</svg>
		</button>
	)
}

export default RoundedButton
