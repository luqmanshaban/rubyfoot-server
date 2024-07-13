import mongoose from "mongoose";

const { Schema } = mongoose

const ProductSchema = new Schema({ 
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    price: {
        type: Number,
        required: [true, "Please enter a price"]
    },
    quantity: {
        type: Number,
        required: [true, "Please enter quantity"]
    }
})

const Product = mongoose.model('Product', ProductSchema)

export default Product