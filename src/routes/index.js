var express = require('express')
var getDataFromXls = require('../controllers/index')

const router = express.Router()

router.get('/', getDataFromXls)

module.exports = router