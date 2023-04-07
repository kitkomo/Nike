const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	email: {
		type: DataTypes.STRING,
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
	},
	role: {
		type: DataTypes.STRING,
		defaultValue: 'USER',
	},
})

const Basket = sequelize.define('basket', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
})

const BasketProduct = sequelize.define('basket_product', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
})

const Product = sequelize.define('product', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
	},
	price: {
		type: DataTypes.INTEGER,
	},
	img: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
	},
	category: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	gender: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

const ProductType = sequelize.define('product_type', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
	},
})
const ProductSex = sequelize.define('product_sex', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
	},
})
const ProductRating = sequelize.define('product_rating', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	score: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
})

const TypeSex = sequelize.define('type_sex', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(ProductRating)
ProductRating.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

ProductType.hasMany(Product)
Product.belongsTo(ProductType)

ProductSex.hasMany(Product)
Product.belongsTo(ProductSex)

Product.hasMany(ProductRating)
ProductRating.belongsTo(Product)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

ProductType.belongsToMany(ProductSex, { through: TypeSex })
ProductSex.belongsToMany(ProductType, { through: TypeSex })

module.exports = {
	User,
	Basket,
	BasketProduct,
	Product,
	ProductRating,
	ProductSex,
	ProductType,
	TypeSex,
}
