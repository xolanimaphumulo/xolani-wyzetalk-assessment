import { Document } from "mongoose";

export interface IGame extends Document {
  _id: string;
  cards: string[];
  matchedCards: string[];
  startTime: Date;
  endTime: Date;
  status: "active" | "completed";
  history: string[];
}
