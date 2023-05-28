import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import cl from './ProductCard.module.scss'

interface PropductCardProps {
	transition?: boolean
	name: string
	img: string
	price: number
	gender: string
	light?: boolean
}

const ProductCard: React.FC<PropductCardProps> = ({transition, name, img, price, gender, light}) => {
	return (
		<Link href='/' className='group'>
			<div className={transition ? 'group-hover:drop-shadow-xl hover:-translate-y-1 transition-all delay-0 ease-in-out duration-300' : ''}>
				<img
					className='overflow-hidden rounded-xl'
					src={img}
					alt='Sneakers'
				/>
				<div className={clsx(cl.info, {
					[cl.white]: light
				})}>
					<div className='flex-grow'>
						<p className='font-medium'>
							{name}
						</p>
						<p className={light ? 'text-white opacity-90' : 'text-gray-500'}>{gender} Shoes</p>
					</div>
					<p>${price}</p>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
