const {ProductSex} = require('../models/models')

class GenderController {
	async create(req, res) {
		const { name } = req.body
		const type = await ProductSex.create({ name })
		return res.json(type)
	}
	async getAll(req, res) {
		const genders = await ProductSex.findAll()
		return res.json(genders)
	}
}

module.exports = new GenderController()
