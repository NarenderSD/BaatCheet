import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MongoDB URI is not defined. Set MONGO_URI in .env");
    }

    const conn = await mongoose.connect(uri); // No need for deprecated options

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1); // Exit if connection fails
  }
};

export default connectDB;
