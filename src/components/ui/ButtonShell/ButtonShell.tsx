import { FC, ReactNode } from 'react'
import cl from './ButtonShell.module.scss'
type ButtonShellProps = {
	children: ReactNode
	title?: string
	onClick?: () => void
}

const ButtonShell: FC<ButtonShellProps> = ({ children, title, onClick }) => {
	return (
		<button
			title={title}
			className={cl.button}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default ButtonShell
