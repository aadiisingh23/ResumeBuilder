import express  from 'express'
import 'dotenv/config' 
import cors from 'cors'
import { dbConnection } from './config/db.js'
import  cookieParser from 'cookie-parser'
 const PORT = process.env.PORT
import userRouter from './routes/user.route.js'
const app =  express();


// DATABSE 

dbConnection();

//  MIDDLEWARE
app.use(express.json());

app.use('/api/auth',userRouter)


// ROUTES

app.get('/',(req,res)=>{
    res.send(" I am UnBrakable")
})







app.listen(PORT,()=>{
    console.log(`Port is Running at http://localhost:${PORT}`);
    
})