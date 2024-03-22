import mongoose, { Model, Schema } from "mongoose";
import { IPlayerGameMove } from "../types/playerGameMove";

const playerGameMoveSchema: Schema = new Schema({
  gameId: {
    type: String,
    required: true,
  },
  playerId: {
    type: String,
    required: true,
  },

  chosenCards: [String],
  result: {
    type: String,
    enum: ["match", "no match"],
    default: "no match",
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

export const PlayerGameMoveModel = mongoose.model(
  "PlayerGameMove",
  playerGameMoveSchema
) as unknown as Model<IPlayerGameMove>;
