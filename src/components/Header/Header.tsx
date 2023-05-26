import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logo from '@/assets/images/logoBlack.svg'

import HeroIcon from '../ui/HeroIcon/HeroIcon'

import Navigation from './Navigation/Navigation'

const Header: FC = () => {
	return (
		<header className="mx-auto flex justify-between py-4">
			<div className="max-w-xs flex-grow">
				<Navigation />
			</div>
			<Link href="/">
				<Image src={logo} width={70} height={25} alt="nike" />
			</Link>
			<div className="max-w-xs flex flex-grow justify-end">
				<HeroIcon name="HiMagnifyingGlass" size={20}/>
				<HeroIcon name="HiUser" size={20}/>
			</div>
		</header>
	)
}

export default Header
