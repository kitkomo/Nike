import { FC } from 'react'
import * as HeroIcon2 from 'react-icons/hi2'

import { HeroIcon2Type } from './heroicon.interface'

const HeroIcon: FC<HeroIcon2Type> = ({ name, size, color }) => {
	const IconComponent = HeroIcon2[name]

	return <IconComponent size={size} color={color}/>
}

export default HeroIcon
