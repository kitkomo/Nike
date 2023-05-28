import clsx from 'clsx'
import { Montserrat } from 'next/font/google'

import Header from '@/components/Header/Header'

import '@/assets/scss/index.scss'
import Footer from '@/components/Footer/Footer'

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap'
})

export const metadata = {
	title: 'Nike',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={clsx(montserrat.className)}>
				<div className="wrapper">
					<Header />
				</div>
				<main style={{overflowX: 'hidden'}}>{children}</main>
				<Footer/>
			</body>
		</html>
	)
}
