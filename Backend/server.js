import app from "./app.js";
import cloudinary from "cloudinary";
import cors from "cors";

const port=process.env.PORT ;

app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? 
           process.env.FRONTEND_URL : 
           'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));
cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLIENT_NAME,
    api_key:process.env.CLOUDINARY_CLIENT_API,
    api_secret:process.env.CLOUDINARY_CLIENT_API_SECRET,
});

app.listen(port,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});
