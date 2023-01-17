import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () => {
  mongoose.set("strictQuery", false);
  const url = process.env.MONGO_URL;
  try {
    await mongoose.connect(url);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the DB", error.message);
  }
};
export default Connection;
