// import {v2 as cloudinary} from "cloudinary"
// import fs from "fs"






// cloudinary.config({ 
//         cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//         api_key: process.env.CLOUDINARY_API_KEY, 
//         api_secret: process.env.CLOUDINARY_API_SECRET 
// });


// const uploadOnCloudinary=async (localFilePath)=>{
//     try{
//         if(!localFilePath)return null
//         const response=await cloudinary.uploader.upload(localFilePath,{
//             resource_type:"auto"
//         })
//     // console.log("File is uploaded on cloudinary",response.url);
    
//     fs.unlinkSync(localFilePath)
//     return response;
    
//     }catch(error){
//        fs.unlinkSync(localFilePath)
//        return null
//     }
// }

// export {uploadOnCloudinary}

import dotenv from "dotenv";
dotenv.config();
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

console.log("cloud name:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("api key:", process.env.CLOUDINARY_API_KEY);
console.log("api secret exists:", !!process.env.CLOUDINARY_API_SECRET);
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  if (!localFilePath) return null;

  try {
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder: "avatars"
    });

    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return response;
  } catch (error) {
    if (localFilePath && fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    throw new Error(`Cloudinary upload failed: ${error.message}`);
  }
};

export { uploadOnCloudinary };