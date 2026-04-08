// import dns from "dns"
// dns.setDefaultResultOrder("ipv4first")
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://pankaj:pankaj106@cluster0.tzxhbya.mongodb.net";

    console.log("USING URI:", uri);

    const conn = await mongoose.connect(uri);

    console.log("MONGODB CONNECTED:", conn.connection.host);
  } catch (err) {
    console.error("ERROR:", err);
  }
};

export default connectDB;

































// import mongoose from "mongoose";
// import {DB_NAME} from "../constants.js"

// const connectDB=async()=>{
//     try{
//         const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//             console.log(`\n MONGODB connected !! DB HOST: ${connectionInstance.connection.host}`);
            
        

//     }catch (error){
//         console.log("MONGODB connection FAHH",error);
//         process.exit(1)
        
//     }
// }
// export default connectDB





















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