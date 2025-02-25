import mongoose from "mongoose";

export async function connectDB() {
  try {
    const DB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/yourDatabase";
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1); // Exit the process if DB fails
  }
}
