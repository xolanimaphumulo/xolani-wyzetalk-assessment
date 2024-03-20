import { PlayerModel } from "../models/playerModel";
import { IPlayer } from "../types/player";

export const createPlayer = async (data: IPlayer) => {
  const { fullName, email } = data;

  const player = new PlayerModel({
    fullName,
    email,
    gamesPlayed: 0,
    gamesWon: 0,
    gamesLost: 0,
    gamesDrawn: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  const newPlayerResponse: IPlayer = await player.save();
  if (!newPlayerResponse) {
    return null;
  }

  return newPlayerResponse;
};
