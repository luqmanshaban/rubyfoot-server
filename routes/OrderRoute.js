import express from 'express'
import { createOrder, getAllOrders } from '../controllers/OrderController.js'

const orderRoute = express.Router()

orderRoute.post('/orders', createOrder)
orderRoute.get('/orders', getAllOrders)

export default orderRoute