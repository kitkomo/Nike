import React from 'react'
import ProductCard from '../components/ProductCard'
import FilterButton from '../UI/FilterButton'

const Shop: React.FC = () => {
	return (
		<div className=' mx-auto bg-white rounded-xl p-5'>
			<FilterButton>Jordan</FilterButton>
			<h1 className='py-10 font-medium text-xl'>
				Men's shoes and sneakers (743)
			</h1>
			<div className='grid grid-cols-3 grid-rows-auto gap-x-5 gap-y-16'>
				<ProductCard transition />
				<ProductCard transition />
				<ProductCard transition />
				<ProductCard transition />
				<ProductCard transition />
				<ProductCard transition />
				<ProductCard transition />
				<ProductCard transition />
				<ProductCard transition />
				<ProductCard transition />
				<ProductCard transition />
				<ProductCard transition />
				<ProductCard transition />
			</div>
		</div>
	)
}

export default Shop
