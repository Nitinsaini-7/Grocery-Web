import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import ConnectDB from "./configs/db.js";
import 'dotenv/config'
import userRoute from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";

const app = express();
const PORT = process.env.PORT || 4000;

await ConnectDB();



const allowOrigins = ["http://localhost:5173"];

// Middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: allowOrigins, // Replace with your frontend URL
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Api Working!!");
});

app.use("/api/user",userRoute)
app.use("/api/seller", sellerRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
