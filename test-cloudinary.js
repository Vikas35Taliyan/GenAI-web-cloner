// test-cloudinary.js
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("API Key:", process.env.CLOUDINARY_API_KEY);
console.log("API Secret:", process.env.CLOUDINARY_API_SECRET);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

async function testConnection() {
  try {
    const response = await cloudinary.api.ping();
    console.log("✅ Cloudinary connection successful:", response);
  } catch (error) {
    console.error("❌ Cloudinary connection failed:", error.message);
    console.error("Full error details:", error);
  }
}

testConnection();
