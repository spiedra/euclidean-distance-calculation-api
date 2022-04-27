const express = require('express')
const getDataFromXls = require('../controllers/Spreadsheet')

const getLearningStyle1 = require('../controllers/LearningStyle')
const getStudentCampus = require('../controllers/StudentHomeCampus')
const getStudentGenre = require('../controllers/StudentGender')
const getLearningStyle2 = require('../controllers/LearningStyle2')
const getTeacherType = require('../controllers/TeacherType')
const getNetworkClassification = require('../controllers/NetworkClassification')

const router = express.Router()

// GET
router.get('/', getDataFromXls)

// POST
router.post('/learning-style/1/calculation', getLearningStyle1)
router.post('/student-campus/calculation', getStudentCampus)
router.post('/student-genre/calculation', getStudentGenre)
router.post('/learning-style/2/calculation', getLearningStyle2)
router.post('/teacher-type/calculation', getTeacherType)
router.post('/network-classification/calculation', getNetworkClassification)

module.exports = router
