import React from 'react'
import { useSwiper } from 'swiper/react'
import RoundedButton from '../UI/RoundedButton'

const SwiperButtons: React.FC = () => {
	const swiper = useSwiper()
	return (
		<div className='absolute -top-10 right-0 z-50 flex gap-3'>
			<RoundedButton onClick={() => swiper.slidePrev()}>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M15.75 19.5L8.25 12l7.5-7.5'
				/>
			</RoundedButton>
			<RoundedButton onClick={() => swiper.slideNext()}>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M8.25 4.5l7.5 7.5-7.5 7.5'
				/>
			</RoundedButton>
		</div>
	)
}

export default SwiperButtons
