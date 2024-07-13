import Order from "../models/Order.js"

export const createOrder = async(req, res) => {
    const newOrder = req.body.orders
    if(!newOrder) {
        res.status(400).json({ error: "Order not provided"})
    }
    try {
        const order = await Order.create(newOrder)
        
        if(order) {
            res.status(400).json({error: "ORDER EXIST"})
        }
        res.status(201).json({success: "ORDER CREATED SUCCESSFULLY"})
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const getAllOrders = async(req, res) => {
    try {
        const order = await Order.find()
        if(!order || order.length === 0) {
            res.status(401).json({error: "Order not found"})
        }else {
            res.status(200).json({orders: order})
        }
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}