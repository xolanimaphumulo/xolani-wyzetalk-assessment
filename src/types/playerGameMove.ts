export interface IPlayerGameMove extends Document {
  _id: string;
  gameId: string;
  playerId: string;
  chosenCards: string[];
  createdAt: Date;
  result: "match" | "no match";
}
