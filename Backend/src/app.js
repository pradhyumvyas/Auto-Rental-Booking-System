import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
   origin: process.env.CORS_ORIGIN,
   credentials: true
}))

app.use(express.json({
   limit: "16kb"
}));

app.use(express.urlencoded({
   extended: true,
   limit: "16kb"
}))

// Routes starts here
import bookingRouter from "./routes/user.routes.js";

// Mounting routes with middleware, app.use() is used to mount middleware 
//instead of app.get() or app.post()
app.use("/api/v1/booking", bookingRouter);

// Routes ends here
export {app}