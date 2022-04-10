const express = require('express')
const getDataFromXls = require('../controllers/index')

const router = express.Router()

router.get('/', getDataFromXls)

module.exports = router
