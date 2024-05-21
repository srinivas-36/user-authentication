import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/route.js";  // Ensure the path is correct
import userRoute from "./routes/userRoute.js"
const app = express();
const PORT = 7000;

// Middleware
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://srinivasbalam02:Srinivas2003@users.pd8h9ab.mongodb.net/?retryWrites=true&w=majority&appName=users")
  .then(() => {
    console.log("Connected to mongoose");
  })
  .catch((err) => {
    console.error("Error connecting to mongoose:", err);
  });

app.use("/api/auth", authRoute);
app.use("/api",userRoute);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
