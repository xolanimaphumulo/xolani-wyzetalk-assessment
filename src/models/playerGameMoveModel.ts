import mongoose, { Model, Schema } from "mongoose";
import { IPlayerGameMove } from "../types/playerGameMove";

const playerGameMoveSchema: Schema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
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
});

export const PlayerGameMoveModel = mongoose.model(
  "PlayerGameMove",
  playerGameMoveSchema
) as unknown as Model<IPlayerGameMove>;
