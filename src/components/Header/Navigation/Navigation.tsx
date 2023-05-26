'use client'

import Link from 'next/link'
import { FC } from 'react'
import { navigationData } from './navigation.data'

const Navigation: FC = () => {
	return (
		<nav>
			<ul className='flex gap-4 text-sm font-medium'>
			{
				navigationData.map(link => (
						<li>
					<Link href="/shoes">Shoes</Link>
				</li>
				))
			}
			</ul>
		</nav>
	)
}

export default Navigation