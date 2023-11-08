import express from 'express'
import { connectToDB } from "./config/db.js";
import cors from 'cors'
import userRouter from './routes/AuthRoute.js';
import orderRoute from './routes/OrderRoute.js';

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', userRouter)
app.use('/api', orderRoute)

connectToDB()

const port = 8000
app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}`);
})