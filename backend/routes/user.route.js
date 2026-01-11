import express from 'express'
import { getUserProfile, loginUser, register } from '../controllers/user.Controller.js'
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()
router.post('/register',register)
router.post('/login',loginUser)
router.get('/profile',protect,getUserProfile)

export default router