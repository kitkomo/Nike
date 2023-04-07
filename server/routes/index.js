const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const typeRouter = require('./typeRouter')
const genderRouter = require('./genderRouter')

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/type', typeRouter)
router.use('/gender', genderRouter)

module.exports = router
