import { makeAutoObservable } from 'mobx'
import { IProduct } from '../models/IProduct'

export default class ProductStore {
	_products: IProduct[]
	_genders: string[]
	_categories: string[]
	_kitkomoFavorites: IProduct[]

	constructor() {
		this._products = [
			{
				id: 1,
				name: 'Air mAx Pulse',
				description: 'бля шо за тяги',
				category: 'classic',
				gender: 'Men',
				img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0b94722-d603-4e66-829c-51f1801ec3fa/air-max-pulse-mens-shoes-ShS3tL.png',
				price: 125,
			},
			{
				id: 1,
				name: 'Air mAx Pulse',
				description: 'бля шо за тяги',
				category: 'classic',
				gender: 'Men',
				img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0b94722-d603-4e66-829c-51f1801ec3fa/air-max-pulse-mens-shoes-ShS3tL.png',
				price: 125,
			},
			{
				id: 1,
				name: 'Air mAx Pulse',
				description: 'бля шо за тяги',
				category: 'classic',
				gender: 'Men',
				img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0b94722-d603-4e66-829c-51f1801ec3fa/air-max-pulse-mens-shoes-ShS3tL.png',
				price: 125,
			},
			{
				id: 1,
				name: 'Air mAx Pulse',
				description: 'бля шо за тяги',
				category: 'classic',
				gender: 'Men',
				img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0b94722-d603-4e66-829c-51f1801ec3fa/air-max-pulse-mens-shoes-ShS3tL.png',
				price: 125,
			},
			{
				id: 1,
				name: 'Air mAx Pulse',
				description: 'бля шо за тяги',
				category: 'classic',
				gender: 'Men',
				img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0b94722-d603-4e66-829c-51f1801ec3fa/air-max-pulse-mens-shoes-ShS3tL.png',
				price: 125,
			},
			{
				id: 1,
				name: 'Air mAx Pulse',
				description: 'бля шо за тяги',
				category: 'classic',
				gender: 'Men',
				img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0b94722-d603-4e66-829c-51f1801ec3fa/air-max-pulse-mens-shoes-ShS3tL.png',
				price: 125,
			},
			{
				id: 1,
				name: 'Air mAx Pulse',
				description: 'бля шо за тяги',
				category: 'classic',
				gender: 'Men',
				img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0b94722-d603-4e66-829c-51f1801ec3fa/air-max-pulse-mens-shoes-ShS3tL.png',
				price: 125,
			},
			{
				id: 1,
				name: 'Air mAx Pulse',
				description: 'бля шо за тяги',
				category: 'classic',
				gender: 'Men',
				img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0b94722-d603-4e66-829c-51f1801ec3fa/air-max-pulse-mens-shoes-ShS3tL.png',
				price: 125,
			},
			{
				id: 1,
				name: 'Air mAx Pulse',
				description: 'бля шо за тяги',
				category: 'classic',
				gender: 'Men',
				img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0b94722-d603-4e66-829c-51f1801ec3fa/air-max-pulse-mens-shoes-ShS3tL.png',
				price: 125,
			},
		]
		this._genders = []
		this._categories = []
		this._kitkomoFavorites = [
			{
				id: 1,
				name: 'Air mAx Pulse',
				description: 'бля шо за тяги',
				category: 'classic',
				gender: 'Men',
				img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0b94722-d603-4e66-829c-51f1801ec3fa/air-max-pulse-mens-shoes-ShS3tL.png',
				price: 125,
			},
			{
				id: 1,
				name: 'Air mAx Pulse',
				description: 'бля шо за тяги',
				category: 'classic',
				gender: 'Men',
				img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0b94722-d603-4e66-829c-51f1801ec3fa/air-max-pulse-mens-shoes-ShS3tL.png',
				price: 125,
			},
			{
				id: 1,
				name: 'Air mAx Pulse',
				description: 'бля шо за тяги',
				category: 'classic',
				gender: 'Men',
				img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0b94722-d603-4e66-829c-51f1801ec3fa/air-max-pulse-mens-shoes-ShS3tL.png',
				price: 125,
			},
			{
				id: 1,
				name: 'Air mAx Pulse',
				description: 'бля шо за тяги',
				category: 'classic',
				gender: 'Men',
				img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0b94722-d603-4e66-829c-51f1801ec3fa/air-max-pulse-mens-shoes-ShS3tL.png',
				price: 125,
			},
			{
				id: 1,
				name: 'Air mAx Pulse',
				description: 'бля шо за тяги',
				category: 'classic',
				gender: 'Men',
				img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0b94722-d603-4e66-829c-51f1801ec3fa/air-max-pulse-mens-shoes-ShS3tL.png',
				price: 125,
			},
		]

		makeAutoObservable(this)
	}

	setProducts(products: IProduct[]) {
		this._products = products
	}
	setCategories(categories: string[]) {
		this._categories = categories
	}
	setGenders(genders: string[]) {
		this._genders = genders
	}
	setKitkomoFavorites(products: IProduct[]) {
		this._kitkomoFavorites = products
	}

	get products() {
		return this._products
	}
	get categories() {
		return this._categories
	}
	get genders() {
		return this._genders
	}
	get kitkomoFavorites() {
		return this._kitkomoFavorites
	}
}
