import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

import ProductCard from './ProductCard'
import SwiperButtons from './SwiperButtons'
import { IProduct } from './../models/IProduct'

type ProductsSliderProps = {
	data: IProduct[]
}

const ProductsSlider: React.FC<ProductsSliderProps> = ({ data }) => {
	return (
		<Swiper
			modules={[Navigation, Scrollbar, A11y]}
			spaceBetween={10}
			slidesPerView={3}
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true, hide: true }}
			className='overflow-visible relative pt-3 pb-10'
		>
			{data.map(item => (
				<SwiperSlide>
					<ProductCard
						key={item.name}
						name={item.name}
						price={item.price}
						img={item.img}
						gender={item.gender}
					/>
				</SwiperSlide>
			))}
			<SwiperButtons />
		</Swiper>
	)
}

export default ProductsSlider
