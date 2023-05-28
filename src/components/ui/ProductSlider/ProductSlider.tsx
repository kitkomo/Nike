'use client'

import { FC } from 'react'
import { IProduct } from 'shared/types/product.interface'
import {
	A11y,
	Autoplay,
	Keyboard,
	Mousewheel,
	Navigation,
	Scrollbar
} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'

import ProductCard from './../ProductCard/ProductCard'
import SwiperButtons from './SwiperButtons'

type ProductsSliderProps = {
	data: IProduct[]
	light?:boolean
}

const ProductsSlider: FC<ProductsSliderProps> = ({ data, light }) => {
	return (
		<Swiper
			modules={[Navigation, Scrollbar, A11y, Keyboard, Mousewheel, Autoplay]}
			spaceBetween={10}
			slidesPerView={1}
			initialSlide={3}
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true, hide: true }}
			breakpoints={{
				330: {
					slidesPerView: 2,
					spaceBetween: 10
				},

				500: {
					slidesPerView: 3,
					spaceBetween: 10
				},
				900: {
					slidesPerView: 4,
					spaceBetween: 20
				}
			}}
			mousewheel={true}
			autoplay={{
				delay: 5000,
				pauseOnMouseEnter: true
			}}
			loop={true}
			className="overflow-visible relative"
			style={{ paddingTop: 50, paddingBottom: 50, overflow: 'visible' }}
		>
			{data.map(item => (
				<SwiperSlide key={item.id}>
					<ProductCard
						name={item.name}
						price={item.price}
						img={item.img}
						gender={item.gender}
						transition
						light={light}
					/>
				</SwiperSlide>
			))}
			<SwiperButtons />
		</Swiper>
	)
}

export default ProductsSlider
