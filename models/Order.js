import mongoose from "mongoose";

const { Schema } = mongoose

const OrderSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    price: {
        type: Number,
        required: [true, "Please enter a price"]
    },
    color: {
        type: String,
        required: [true, "Please enter a color"]
    },
    size: {
        type: Number,
        required: [true, "Please enter a size"]
    },
    quantity: {
        type: Number,
        required: [true, "Please enter quantity"]
    },
})

const Order = mongoose.model('Order', OrderSchema)
export default Order