const express = require('express')
const getDataFromXls = require('../controllers/Spreadsheet')

const getLearningStyle1 = require('../controllers/LearningStyle')
const getStudentCampus = require('../controllers/StudentHomeCampus')

const router = express.Router()

// GET
router.get('/', getDataFromXls)

// POST
router.post('/learning-style/1/calculation', getLearningStyle1)
router.post('/student-campus/calculation', getStudentCampus)

module.exports = router
