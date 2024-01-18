import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const config={
    mongo:{
        uri:process.env.MONGODB_URI,
    }
   
    
}


const connectDB=async (config:any):Promise<void>=>{
    const {uri}=config.mongo

    try{

      await mongoose.connect(uri)
      console.log('connected to the mongoDB database');
      

    }catch(error){

        console.log('Error connecting to the mongoDB database:',error);
        process.exit(1)
        

    }

     

}


export {connectDB,config}


