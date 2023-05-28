import Link from 'next/link'
import { FC } from 'react'
import cl from './ExpandButton.module.scss'
import clsx from 'clsx'
interface ExpandButtonProps {
	children: string
	light?: boolean
}

const ExpandButton: FC<ExpandButtonProps> = ({ children, light }) => {
	return (
		<button className={clsx(cl.default, {
			[cl.light]: light
		})}>
			{children}
		</button>
	)
}

export default ExpandButton
