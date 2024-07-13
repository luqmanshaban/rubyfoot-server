import express from 'express'
import userRouter from './AuthRoute.js'
import productRoute from './ProductRoute.js'

const router = express.Router()

router.use('/api/v1', userRouter)
router.use('/api/v1', productRoute)

export default router