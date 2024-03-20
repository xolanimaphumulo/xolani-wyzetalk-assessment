import mongoose, { Model, Schema } from "mongoose";
import { IPlayer } from "../types/player";

const playerSchema: Schema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gamesPlayed: {
    type: Number,
    required: true,
  },
  gamesWon: {
    type: Number,
    required: true,
  },
  gamesLost: {
    type: Number,
    required: true,
  },
  gamesDrawn: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
});

export const PlayerModel = mongoose.model(
  "Player",
  playerSchema
) as unknown as Model<IPlayer>;
