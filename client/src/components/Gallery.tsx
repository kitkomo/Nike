import React from 'react'

const Gallery: React.FC = () => {
	return (
		<div className='grid grid-rows-2 grid-cols-4 gap-2 max-h-96 mt-7 mb-14 my-3'>
			<div className='rounded-xl overflow-hidden drop-shadow-lg'>
				<img
					className='w-full h-full object-center object-cover'
					src='images/nike-1.jpg'
					alt='Nike'
				/>
			</div>
			<div className='max-h-full row-span-2 rounded-xl overflow-hidden drop-shadow-lg' >
				<img
					className='w-full h-full object-center object-cover'
					src='images/nike-2.jpg'
					alt='Nike'
				/>
			</div>
			<div className='rounded-xl overflow-hidden drop-shadow-lg'>
				<img
					className='w-full h-full object-center object-cover'
					src='images/nike-3.jpg'
					alt='Nike'
				/>
			</div>
			<div className='rounded-xl overflow-hidden drop-shadow-lg'>
				<img
					className='w-full h-full object-center object-cover'
					src='images/nike-4.jpg'
					alt='Nike'
				/>
			</div>
			<div className='rounded-xl overflow-hidden drop-shadow-lg'>
				<img
					className='w-full h-full object-center object-cover'
					src='images/nike-5.jpg'
					alt='Nike'
				/>
			</div>
			<div className='rounded-xl overflow-hidden col-span-2 drop-shadow-lg'>
				<img
					className='w-full h-full object-center object-cover'
					src='images/nike-6.jpg'
					alt='Nike'
				/>
			</div>
		</div>
	)
}

export default Gallery
