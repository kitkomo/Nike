import React from 'react'

interface FilterButtonProps {
	children: string
}

const FilterButton: React.FC<FilterButtonProps> = ({ children }) => {
	return (
		<button className='bg-black text-white rounded-full py-1 px-5 hover:bg-opacity-80 transition-all'>
			{children}
		</button>
	)
}

export default FilterButton
