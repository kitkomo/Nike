import React from 'react'

const Search: React.FC = () => {
	return (
		<div className='relative'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-6 h-6 stroke-zinc-800 absolute left-1 top-1/2 transform -translate-y-1/2'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
				/>
			</svg>

			<input type='text' placeholder='Search...' className='bg-additional rounded-full outline-none text-sm capitalize px-9 py-1 font-medium' />
		</div>
	)
}

export default Search
