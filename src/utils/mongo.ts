const mongoose = require("mongoose");

// Function to connect to MongoDB
export const connectToDB = async () => {
  const DB_GAME_NAME = "xolani_game";

  const uri =
    process.env.MONGO_URI || `mongodb://localhost:27017/${DB_GAME_NAME}`;
  try {
    await mongoose.connect(uri, {
      family: 4,
    });
    console.log("Connected to Mongo");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
};
