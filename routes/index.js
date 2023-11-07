import express from 'express'
import userRouter from './AuthRoute.js'

const router = express.Router()

router.use('/api', userRouter)

export default router