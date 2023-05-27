import { FC, ReactNode } from 'react'

type ButtonShellProps = {
	children: ReactNode
	title?: string
	onClick?: () => void
}

const ButtonShell: FC<ButtonShellProps> = ({ children, title, onClick }) => {
	return (
		<button
			title={title}
			className="hover:bg-slate-200 p-2 rounded-md cursor-pointer transition-colors sm:p-1"
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default ButtonShell
