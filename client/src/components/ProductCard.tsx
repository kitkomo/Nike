import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard:React.FC = () => {
	return (
		<Link to='/'>
			<img
				className='overflow-hidden rounded-xl'
				src='images/jordans.jpg'
				alt='Sneakers'
			/>
			<div className='flex gap-5 mt-2 text-sm'>
				<div className='flex-grow'>
					<p className='font-medium'>Nike Dunk Something Retro Premium Yopta</p>
					<p className='text-gray-500'>Men's Shoes</p>
				</div>
				<p>$125</p>
			</div>
		</Link>
	)
}

export default ProductCard
