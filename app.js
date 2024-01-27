import express from 'express'
import mongoose from 'mongoose'
import cors from  'cors'
import  'dotenv/config'
import {userRoutes,featureRoute} from "./src/Routes/index.js";

const app = express()
app.use(express.json())
app.use(cors())
//route setup
app.use('/user',userRoutes )
app.use('/feature',featureRoute)
//db connection
mongoose.connect(process.env.DB_URI).then(()=>console.log(`app connected with database`)).catch((error)=>console.log(error.message))
export default app