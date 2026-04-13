
import  dotenv  from "dotenv";
dotenv.config()

console.log("CLOUDINARY_CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
console.log("CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET ? "present" : "missing");

import connectDB from "./db/index.js";
import {app} from './app.js'

connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at Port: ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MONGODB Connection failed!!!",err);
    
})








