import React from 'react'
import ProductCard from '../components/ProductCard'
import FilterButton from '../UI/FilterButton'
import { observer } from 'mobx-react-lite'
import { RootStateContext } from '../store/RootStore'

const Shop: React.FC = observer(() => {
	const { productStore } = React.useContext(RootStateContext)

	return (
		<div className=' mx-auto bg-white rounded-xl p-5'>
			<FilterButton>Jordan</FilterButton>
			<h1 className='py-10 font-medium text-xl'>
				Men's shoes and sneakers ({productStore.products.length})
			</h1>
			<div className='grid grid-cols-3 grid-rows-auto gap-x-5 gap-y-16'>
				{productStore.products.map(item => (
					<ProductCard
						transition
						key={item.name}
						name={item.name}
						price={item.price}
						img={item.img}
						gender={item.gender}
					/>
				))}
			</div>
		</div>
	)
})

export default Shop
