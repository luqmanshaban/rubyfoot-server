import express from 'express'
import userRouter from './AuthRoute.js'
import productRoute from './ProductRoute.js'

const router = express.Router()

router.use('/api/v1', userRouter)
router.use('/api/v1', productRoute)
router.get('/api/v1/hello', function async(req, res) {
    res.status(200).json({ message: "hello, world"})
})

export default router