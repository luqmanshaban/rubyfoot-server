import express from 'express'
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/ProductController.js'

const productRoute = express.Router()

productRoute.post('/products', createProduct)
productRoute.get('/products/:id', getProduct)
productRoute.get('/products', getProducts)
productRoute.put('/products/:id', updateProduct)
productRoute.delete('/products/:id', deleteProduct)

export default productRoute