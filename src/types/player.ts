export interface IPlayer extends Document {
  _id: string;
  fullName: string;
  email: string;
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
  gamesDrawn: number;
  createdAt: Date;
  updatedAt: Date;
}
