const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const AuthMiddleware = require('../middleware/AuthMiddleware')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/auth', AuthMiddleware, userController.isAuth)

module.exports = router