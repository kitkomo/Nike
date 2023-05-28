'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import logo from '@/assets/images/logoBlack.svg'

import ButtonShell from '../ui/ButtonShell/ButtonShell'
import HeroIcon from '../ui/HeroIcon/HeroIcon'

import cl from './Header.module.scss'
import Navigation from './Navigation/Navigation'

const Header: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<>
			{isMenuOpen && (
				<div
					className={clsx(cl.backdrop)}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				></div>
			)}
			<header className={cl.header}>
				<div
					className={clsx(cl.navWrapper, {
						[cl.navWrapperOpen]: isMenuOpen
					})}
				>
					<Navigation />
					<div className={cl.buttons}>
						<ButtonShell title="search">
							<HeroIcon name="HiMagnifyingGlass" size={20} />
						</ButtonShell>
						<ButtonShell title="cart">
							<HeroIcon name="HiOutlineShoppingBag" size={20} />
						</ButtonShell>
						<Link href="/account" className="flex items-center">
							<ButtonShell title="account">
								<HeroIcon name="HiOutlineUser" size={20} />
							</ButtonShell>
						</Link>
					</div>
				</div>

				<Link href="/" className={cl.logo}>
					<Image src={logo} width={60} alt="nike" />
				</Link>
				<div className={cl.burger}>
					<ButtonShell title="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<HeroIcon name="HiOutlineBars3BottomRight" size={20} />
					</ButtonShell>
				</div>
			</header>
		</>
	)
}

export default Header
