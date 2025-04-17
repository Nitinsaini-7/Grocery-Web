import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import ConnectDB from "./configs/db.js";
import 'dotenv/config'
import userRoute from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import addressRouter from "./routes/addressRoute.js";
import orderRouter from "./routes/orderRoute.js";


const app = express();
const PORT = process.env.PORT || 4000;

await ConnectDB();
connectCloudinary();


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
app.use("/api/product",productRouter)
app.use("/api/cart",cartRouter)
app.use("/api/address",addressRouter)
app.use("/api/order",orderRouter)


// product validation failed: description: Cast to string failed for value "[ 'very taisty fruit' ]" (type Array) at path "description"
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
