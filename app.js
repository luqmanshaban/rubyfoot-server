import express from 'express'
import { connectToDB } from "./config/db.js";
import cors from 'cors'
import router from './routes/index.js';

const app = express()

app.use(express.json())
app.use(cors())

app.use(router)

connectToDB()

const port = 8000
app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}`);
})