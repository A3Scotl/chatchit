import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDb from "./db/connectToMongoDb.js";


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()) // phân tích các yêu cầu đến với dữ liệu JSON (từ req.body)

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);


app.listen(PORT,()=> {
    connectToMongoDb();
    console.log(`server is running on port ${PORT}`)
});

