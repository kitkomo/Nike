import Link from 'next/link'

import cl from './CategoryCard.module.scss'

type CategorycardProps = {
	name: string
	img: string
}

const CategoryCard: React.FC<CategorycardProps> = ({ name, img }) => {
	return (
		<Link href="/" className={cl.card}>
			<div className="overflow-hidden rounded-xl">
				<picture>
					<source srcSet={img + '.webp'} />
					<img
						className="object-cover object-center"
						src={img + '.jpg'}
						alt="preview"
						draggable={false}
					/>
				</picture>
			</div>
			<p className={cl.name}>{name}</p>
		</Link>
	)
}

export default CategoryCard
