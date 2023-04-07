const Router = require('express')
const router = new Router()
const genderController = require('../controllers/genderController')

router.post('/', genderController.create)
router.get('/', genderController.getAll)

module.exports = router