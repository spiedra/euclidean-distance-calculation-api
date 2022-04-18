const express = require('express')
const getDataFromXls = require('../controllers/index')
const getEuclideanDistanceCalculation = require('../controllers/LearningStyle')

const router = express.Router()

// GET
router.get('/', getDataFromXls)

// POST
router.post('/learning-style/1/calculation', getEuclideanDistanceCalculation)

module.exports = router
