// import mongoose from "mongoose";

// export const connectDB=async()=>{
//     try {
//         const conn=await mongoose.connect(process.env.MONGODB_URL);
//         console.log(`MongoDB connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.log("MongoDB connection error:",error);
//     }
// };



import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Ensure env variables are loaded

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI; // Fetch MongoDB URI from env
    if (!uri) {
      throw new Error("MongoDB URI is not defined. Set MONGO_URI in .env");
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process if connection fails
  }
};

export default connectDB;
