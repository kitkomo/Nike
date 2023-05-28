import Image from 'next/image'
import { FC } from 'react'

import CategoryCard from '@/components/ui/CategoryCard/CategoryCard'
import ExpandButton from '@/components/ui/ExpandButton/ExpandButton'
import ProductsSlider from '@/components/ui/ProductSlider/ProductSlider'
import TickerTape from '@/components/ui/TickerTape/TickerTape'

import categories from '@/assets/data/categories.json'
import products from '@/assets/data/products.json'
import memebership from '@/assets/images/membership.jpg'

import cl from './Home.module.scss'

const Home: FC = () => {
	return (
		<>
			<div className="wrapper">
				<section className="my-10">
					<div className={cl.hero}>
						<h1>
							Just <span>SWOOSH</span> it.
						</h1>
						<div className={cl.heroPromo}>
							<video autoPlay loop muted playsInline>
								<source src="/videos/swoosh.mp4" />
							</video>
						</div>
					</div>
				</section>
			</div>
			<div className="mt-36">
				<TickerTape string="Always iconic" />
			</div>
			<div className="wrapper">
				<section className="my-20">
					<div className={cl.categories}>
						{categories.map(data => (
							<CategoryCard key={data.name} name={data.name} img={data.img} />
						))}
					</div>
				</section>
				<section className="my-20">
					<h2 className="text-xl font-medium">New Releases</h2>
					<ProductsSlider data={products} />
				</section>
			</div>
			<section className={cl.acgSection} style={{ backgroundColor: '#99A98F' }}>
				<div className="wrapper">
					<div className={cl.acg}>
						<div className={cl.acgVideo}>
							<video autoPlay loop muted playsInline>
								<source src="/videos/acg.mp4" />
							</video>
						</div>
						<div className={cl.acgTitle}>
							<h2>
								ACG <span>line</span> <br /> in <span>zone</span>
							</h2>
						</div>
					</div>
					<div className="mt-20 md:mt-40">
						<div className="mb-10 flex items-center justify-center">
							<ExpandButton>Shop now</ExpandButton>
						</div>
						<h2 className="text-xl font-medium">ACG products</h2>
						<ProductsSlider data={products} light />
					</div>
				</div>
			</section>
			<div className="wrapper">
				<section className="my-10">
					<div
						className={cl.bannerMembership}
						style={{ backgroundImage: `url(images/membership.jpg)` }}
					>
						<div className={cl.backdrop}></div>
						<div className={cl.bannerContent}>
							<h2>
								Become <br /> a member
							</h2>
							<p>Sign Up for free. Join the community.</p>
							<div>
								<ExpandButton light>Sign In</ExpandButton>
								<ExpandButton light>Join Us</ExpandButton>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default Home
