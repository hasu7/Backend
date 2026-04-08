

import mongoose from "mongoose";
import {DB_NME} from "../constants.js"

const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NME}`)
            console.log(`\n MONGODB connected !! DB HOST: ${connectionInstance.connection.host}`);
            
        

    }catch (error){
        console.log("MONGODB connection FAHH",error);
        process.exit(1)
        
    }
}
export default connectDB





















/*  For normal use in main index.js file xd
import express from "express"
const app=express()

(async()=>{
    try{
        await mongoose.connect(`${process.env.
            MONGODB_URI}/${DB_NAME}`)
            app.on("error",(error)=>{
                console.log("ERRR:",error);
                throw error
            })
            app.listen(process.env.PORT,()=>{
               console.log(`App is listening on port $ {process.env.PORT}`)
            })
    }   catch (error){
            console.error("ERROR:",error)
            throw error
    }
})*/