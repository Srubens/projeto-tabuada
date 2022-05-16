const express = require('express')
const router = express.Router()
const tabuadaControllers = require('../controllers/tabuada')

router.get('/', tabuadaControllers.list)
router.get('/do/:num', tabuadaControllers.tabuada)

module.exports = router