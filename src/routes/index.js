import express from 'express'
import { getDataFromXls } from '../controllers/index.js'

const router = express.Router()

router.get('/', getDataFromXls)

export default router