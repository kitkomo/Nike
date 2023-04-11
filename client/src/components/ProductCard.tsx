import React from 'react'
import { Link } from 'react-router-dom'

interface PropductCardProps {
	transition?: boolean
}

const ProductCard: React.FC<PropductCardProps> = ({transition}) => {
	return (
		<Link to='/'>
			<div className={transition ? 'hover:drop-shadow-xl hover:-translate-y-1 transition-all delay-0 ease-in-out duration-300' : ''}>
				<img
					className='overflow-hidden rounded-xl'
					src='images/jordans.jpg'
					alt='Sneakers'
				/>
				<div className='flex gap-5 mt-2 text-sm'>
					<div className='flex-grow'>
						<p className='font-medium'>
							Nike Dunk Something Retro Premium Yopta
						</p>
						<p className='text-gray-500'>Men's Shoes</p>
					</div>
					<p>$125</p>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
