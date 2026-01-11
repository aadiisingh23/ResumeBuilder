import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      // options are optional in Mongoose v6+
    });

    console.log("✅ Database is Connected");
  } catch (error) {
    console.error("❌ Database Connection Failed:", error.message);
    process.exit(1); // stop the app if DB fails
  }
};