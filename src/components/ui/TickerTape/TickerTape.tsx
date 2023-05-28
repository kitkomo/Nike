import { FC } from 'react'

import cl from './TickerTape.module.scss'
import { Unbounded } from 'next/font/google'
import clsx from 'clsx'
// If loading a variable font, you don't need to specify the font weight
const unbounded = Unbounded({
	subsets: ['latin'],
	display: 'swap',
	weight: '900'
})

const TickerTape: FC<{ string: string }> = ({ string }) => {
	return (
		<div className={cl.ticker}>
			<div className={clsx(cl.ticker__wrapper, unbounded.className)}>
				<div className={cl.ticker__item}>{string}</div>
				<div className={cl.ticker__item}>{string}</div>
				<div className={cl.ticker__item}>{string}</div>
				<div className={cl.ticker__item}>{string}</div>
				<div className={cl.ticker__item}>{string}</div>
			</div>
		</div>
	)
}

export default TickerTape
