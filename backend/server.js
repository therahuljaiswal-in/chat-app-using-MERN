import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";



const PORT = process.env.PORT || 5000;


dotenv.config();

app.use(express.json()); //middle wares : to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()); //middle wares 

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req,res) =>{
//     // root route http://localhost:8000/
//     res.send("Hello World!!");
// });


server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port 5000 ${PORT}`)
}); 