const { ProductType } = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
	async create(req, res) {
		const { name } = req.body
		const type = await ProductType.create({ name })
		return res.json(type)
	}
	async getAll(req, res) {
		const types = await ProductType.findAll()
		return res.json(types)
	}
}

module.exports = new TypeController()
