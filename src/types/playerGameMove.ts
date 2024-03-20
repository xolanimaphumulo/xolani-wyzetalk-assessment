export interface IPlayerGameMove extends Document {
  _id: string;
  gameId: string;
  playerId: string;
  chosenCards: string[];
  result: "match" | "no match";
}
