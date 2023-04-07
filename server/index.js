require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware') 
const fileupload = require('express-fileupload')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileupload({}))
app.use('/api', router)
app.use(errorHandler)

const start = async () => {
	try {
		await sequelize.authenticate()
		console.log('DB authenticated')
		await sequelize.sync()
		console.log('DB synced')
		app.listen(PORT, () => console.log('Server is running on port ' + PORT))
	} catch (e) {
		console.log(e)
	}
}

start()
