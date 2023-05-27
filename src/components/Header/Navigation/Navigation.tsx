'use client'

import Link from 'next/link'
import { FC } from 'react'

import { navigationData } from './navigation.data'
import cl from '../Header.module.scss'

const Navigation: FC = () => {
	return (
		<nav>
			<ul className={cl.navList}>
				{navigationData.map(link => (
					<li key={link.path}>
						<Link
							href={link.path}
							className={cl.navItem}
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation
