import Product from "../models/Product.js"


export const createProduct = async(req, res) => {
    const newProduct = req.body.product
    if(!newProduct) {
        res.status(400).json({ error: "Product not provided"})
    }
    try {
        const productExists = await Product.findOne(newProduct)
        if(productExists){
            res.status(400).json({ error: "Product exists"})
        }

        const product = await Product.create(newProduct)
        res.status(201).json({ message: "Product created", product: product})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


export const getProducts = async(req, res) => {
    try {
        const products = await Product.find()
        if (products.length < 1) {
            res.status(404).json({ error: "No products found"}) 
        }
        res.status(200).json({ products: products})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


export const getProduct = async(req, res) => {
    const id = req.params.id
    console.log(id);
    if(!id) {
        res.status(400).json({ error: "Product ID not provided in the params."})
    }
    try {
        const product = await Product.findById(id)
        if (!product) {
            res.status(404).json({ error: "Product not found"}) 
        }
        res.status(200).json({ product: product})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


export const updateProduct = async (req, res) => {
    const id = req.params.id
    const productData = req.body.product

    if(!id) {
        res.status(400).json({ error: "Product ID not provided in the params."})
    }

    if(!productData) {
        res.status(400).json({ error: "Product not provided"})
    }

    try {
        const product = await Product.findByIdAndUpdate(id, productData, { new: true })
        if (!product) {
            res.status(404).json({ error: "Product not found"}) 
        }
        res.status(200).json({ product: product})
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message })
    }
}


export const deleteProduct = async(req, res) => {
    const id = req.params.id
    if(!id) {
        res.status(400).json({ error: "Product ID not provided in the params."})
    }
    try {
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            res.status(404).json({ error: "Product not found"}) 
        }
        res.status(200).json({ message: "Product deleted successfully"})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}