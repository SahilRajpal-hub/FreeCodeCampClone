import express from 'express'
import {
    getCourses
} from '../controllers/courseController.js'
import { Protect } from '../middleware/authMiddleWare.js'
const router = express.Router()

router.route('/').get(Protect, getCourses)


export default router