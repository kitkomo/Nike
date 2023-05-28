import Link from 'next/link'
import { FC } from 'react'

import { footerData } from './footer.data'

const Footer: FC = () => {
	return (
		<footer className="bg-black text-white py-10">
			<div className="wrapper">
				<div>
					<h3 className="uppercase font-semibold text-sm mb-3">About Nike</h3>
					<ul className="flex flex-col md:flex-row gap-3 text-sm text-gray-400">
						{footerData.about.map(item => (
							<li key={item.label}>
								<Link href={item.path} key={item.label}>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="mt-10">
					<ul className="flex flex-col md:flex-row gap-3 text-sm text-gray-400 items-end justify-end">
						{footerData.info.map(item => (
							<li key={item.label}>
								<Link href={item.path}>{item.label}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
