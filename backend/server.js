import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDb from "./db/connectToMongoDb.js";


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()) // phân tích các yêu cầu đến với dữ liệu JSON (từ req.body)

app.use("/api/auth",authRoutes);
// app.get("/",(req, res) =>{
//     //root router http://localhost:5000/
//     res.send("hello");
// });

app.listen(5000,()=> {
    connectToMongoDb();
    console.log(`server is running on port ${PORT}`)
});

