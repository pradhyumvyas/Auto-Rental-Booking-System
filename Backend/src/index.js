import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
   path:'./env'
})

connectDB()
.then(()=>{

   app.on(('error'),(err)=>{
      console.log("Error: ", error);
      throw error;
     })
     
   app.listen(process.env.PORT || 8000,()=>{
      console.log("App is listen on ", process.env.PORT);
     })
})
.catch((error)=>{
   console.error("Mongo DB connection failed !!: ", error);
   process.exit(1);
})
