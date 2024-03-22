import mongoose, { Model, Schema } from "mongoose";
import { IGame } from "../types/game";

const gameSchema: Schema = new Schema({
  cards: [String],
  matchedCards: [String],
  status: {
    type: String,
    enum: ["active", "completed"],
    default: "active",
  },
  startTime: {
    type: Date,
    required: false,
  },
  endTime: {
    type: Date,
    required: false,
  },
  history: [String],
});

export const GameModel = mongoose.model(
  "Game",
  gameSchema
) as unknown as Model<IGame>;
