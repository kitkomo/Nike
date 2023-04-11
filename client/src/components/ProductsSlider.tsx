import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

import ProductCard from './ProductCard'
import SwiperButtons from './SwiperButtons'

const ProductsSlider: React.FC = () => {
	return (
		<Swiper
			modules={[Navigation, Scrollbar, A11y]}
			spaceBetween={10}
			slidesPerView={3}
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true, hide: true}}
			onSlideChange={() => console.log('slide change')}
			onSwiper={swiper => console.log(swiper)}
			className='overflow-visible relative pt-3 pb-10'
		>
			<SwiperSlide>
				<ProductCard />
			</SwiperSlide>
			<SwiperSlide>
				<ProductCard />
			</SwiperSlide>
			<SwiperSlide>
				<ProductCard />
			</SwiperSlide>
			<SwiperSlide>
				<ProductCard />
			</SwiperSlide>
			<SwiperButtons/>
		</Swiper>
	)
}

export default ProductsSlider
