import React from 'react'
import { Link } from 'react-router-dom'

interface PropductCardProps {
	transition?: boolean
	name: string
	img: string
	price: number
	gender: string
}

const ProductCard: React.FC<PropductCardProps> = ({transition, name, img, price, gender}) => {
	return (
		<Link to='/'>
			<div className={transition ? 'hover:drop-shadow-xl hover:-translate-y-1 transition-all delay-0 ease-in-out duration-300' : ''}>
				<img
					className='overflow-hidden rounded-xl'
					src={img}
					alt='Sneakers'
				/>
				<div className='flex gap-5 mt-2 text-sm'>
					<div className='flex-grow'>
						<p className='font-medium'>
							{name}
						</p>
						<p className='text-gray-500'>{gender} Shoes</p>
					</div>
					<p>${price}</p>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
