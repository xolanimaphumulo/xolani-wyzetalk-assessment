const mongoose = require("mongoose");

// Function to connect to MongoDB
export const connectToDB = async () => {
  const DB_GAME_NAME = "xolani_game";
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${DB_GAME_NAME}`, {
      family: 4,
    });
    console.log("Connected to Mongo");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
};
