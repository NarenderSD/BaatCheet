// import mongoose from 'mongoose';

// export const connectDB = async () => {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/baatcheet', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('MongoDB connected');
//     } catch (error) {
//         console.error('MongoDB connection error:', error);
//     }
// };


import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

// ✅ Named export के बजाय default export करो
export default connectDB;
