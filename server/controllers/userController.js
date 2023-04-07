const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Basket } = require('../models/models')

const generateJwt = (id, email, role) => {
	return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
		expiresIn: '24h',
	})
}

class UserController {
	async register(req, res, next) {
		const { email, password, role } = req.body
		if (!email || !password) {
			return next(ApiError.badRequest('Email or password is missing'))
		}
		const isExist = await User.findOne({ where: { email } })
		if (isExist) {
			return next(ApiError.badRequest('Email already exists'))
		}
		const hashedPassword = await bcrypt.hash(password, 5)
		const user = await User.create({ email, password: hashedPassword, role })
		const basket = await Basket.create({ id: user.id })
		const token = generateJwt(user.id, user.email, user.role)
		return res.json(token)
	}

	async login(req, res, next) {
		const { email, password } = req.body
		const user = await User .findOne({where: {email}})
		if (!user) {
			return next(ApiError.internal('Wrong email or password'))
		}
		const comparePassword = bcrypt.compareSync(password, user.password)
		if (!comparePassword) {
			return next(ApiError.internal('Wrong email or password'))
		}
		const token = generateJwt(user.id, user.email, user.role)
		return res.json(token)
	}
	async isAuth(req, res, next) {
		const token = generateJwt(req.user.id, req.user.email, req.user.role)
		return res.json(token)
	}
}

module.exports = new UserController()
