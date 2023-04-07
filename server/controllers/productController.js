const uuid = require('uuid')
const path = require('path')
const { Product } = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController {
	async create(req, res, next) {
		try {
			const { name, description, price, category, gender } = req.body
			const { img } = req.files
			let fileName = uuid.v4() + '.jpg'
			img.mv(path.resolve(__dirname, '..', 'static', fileName))

			const product = await Product.create({
				name,
				description,
				price,
				category,
				gender,
				img: fileName,
			})
			return res.json(product)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}
	async getOne(req, res) {
		const {id} = req.params
		const product = await Product.findOne({where: {id}})
		return res.json(product)
	}
	async getAll(req, res) {
		const { category, gender, limit = 10, page = 1 } = req.query
		let products
		const offset = page * limit - limit
		if (!category && !gender) {
			products = await Product.findAndCountAll({limit, offset})
		}
		if (category && !gender) {
			products = await Product.findAndCountAll({ where: { category }, limit, offset })
		}
		if (!category && gender) {
			products = await Product.findAndCountAll({ where: { gender }, limit, offset })
		}
		if (category && gender) {
			products = await Product.findAndCountAll({
				where: { category, gender },
				limit,
				offset,
			})
		}
		return res.json(products)
	}
}

module.exports = new ProductController()
