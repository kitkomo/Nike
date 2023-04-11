import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import BasicButton from './../UI/BasicButton'
import CategoryCard from '../components/CategoryCard'
import ProductsSlider from '../components/ProductsSlider'
import categories from '../assets/data/categories.json'

const Home: React.FC = () => {
	return (
		<>
			<Container>
				<div className='text-center flex flex-col gap-5 my-20'>
					<h1 className='uppercase text-5xl font-black'>
						A springy ride for
						<br />
						every run
					</h1>
					<p className='mt-2'>
						Back in its fourth decade, the Nike Pegasus 40 is springier than
						ever
						<br />
						and offers runners of all kinds a perfect fit.
					</p>
					<BasicButton to='/shop'>Shop</BasicButton>
				</div>
				<div className='my-10'>
					<h2 className='font-medium capitalize text-xl mb-5'>
						Always iconic style
					</h2>
					<div className='flex gap-6'>
						{categories.map(data => (
							<CategoryCard name={data.name} img={data.img} />
						))}
					</div>
				</div>
				<div className='flex gap-5 max-h-96 my-20'>
					<Link to='/' className='w-1/2 inline-block rounded-xl overflow-hidden group relative drop-shadow-2xl'>
						<picture>
							<source srcSet='images/mens.webp' type='image/webp' />
							<img className='object-cover object-top group-hover:scale-110 transition-transform duration-1000 ease-in-smooth' src='images/mens.jpg' alt="Men's clothes" />
						</picture>
						<p className='absolute bottom-5 left-5 text-8xl font-bold text-primary opacity-100 whitespace-nowrap mix-blend-hard-light'>Men</p>
					</Link>
					<Link to='/' className='w-1/2 inline-block rounded-xl overflow-hidden group relative drop-shadow-2xl'>
						<picture>
							<source srcSet='images/womens.webp' type='image/webp' />
							<img className='object-cover object-top group-hover:scale-110 transition-transform duration-1000 ease-in-smooth' src='images/womens.jpg' alt="Women's clothes" />
						</picture>
						<p className='absolute bottom-5 left-5 text-8xl font-bold text-primary opacity-100 whitespace-nowrap mix-blend-hard-light'>Women</p>
					</Link>
				</div>
				<div className='grid grid-cols-2 grid-rows-1 justify-items-center my-40'>
					<div className='relative'>
						<h2 className='font-black text-8xl relative z-10'>
							This guy favorite mooodels!
						</h2>
						<img
							className='absolute -bottom-24 z-0'
							src='images/creativeArrow.svg'
							alt='//'
						/>
					</div>
					<div className='w-80 h-80'>
						<img
							className='object-cover object-top rounded-xl drop-shadow-2xl'
							src='images/kitkomo.jpg'
							alt='Kitkomo by himself'
						/>
					</div>
				</div>
				<div>
					<h2 className='font-medium capitalize text-xl mb-5'>
						Kitkomo's favorites
					</h2>
					<ProductsSlider />
				</div>
			</Container>
		</>
	)
}

export default Home
