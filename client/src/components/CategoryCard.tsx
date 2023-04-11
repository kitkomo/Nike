import React from 'react'
import { Link } from 'react-router-dom'

interface CategorycardProps {
	name: string
	img: string
}

const CategoryCard: React.FC<CategorycardProps> = ({ name, img }) => {
	return (
		<Link to='/' className='overflow-hidden rounded-xl relative'>
			<picture>
				<source srcSet={img + '.webp'} />
				<img className='object-cover object-center' src={img + '.jpg'} alt='preview' />
			</picture>
			<p className='absolute bottom-1 right-3 text-xl font-bold text-slate-600 opacity-100 whitespace-nowrap'>{name}</p>
		</Link>
	)
}

export default CategoryCard
