import React from 'react'
import { useSwiper } from 'swiper/react'
import ButtonShell from '../ButtonShell/ButtonShell'
import HeroIcon from '../HeroIcon/HeroIcon'

const SwiperButtons: React.FC = () => {
	const swiper = useSwiper()
	return (
		<div className='absolute top-0 right-0 z-50 flex gap-3'>
			<ButtonShell onClick={() => swiper.slidePrev()}>
				<HeroIcon name='HiArrowLeft'/>
			</ButtonShell>
			<ButtonShell onClick={() => swiper.slideNext()}>
					<HeroIcon name='HiArrowRight'/>
			</ButtonShell>
		</div>
	)
}

export default SwiperButtons
