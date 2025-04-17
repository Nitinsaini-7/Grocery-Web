import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("MongoDB connected successfully.");
        });
        await mongoose.connect(`${process.env.MONGODB_URI}/grocery`)
    } catch (error) {
        console.log(error.nessage);
        
    }
}

export default ConnectDB;