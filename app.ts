import  express,{ Response,Request,NextFunction,Application } from "express";
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import {connectDB,config} from './config/dbConfig'
import userRouter from './routes/userRoute'

dotenv.config()

const app:Application=express()
app.use(bodyParser.json())

const port:string|undefined = process.env.PORT;



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})

connectDB(config)

app.use('/api',userRouter);

