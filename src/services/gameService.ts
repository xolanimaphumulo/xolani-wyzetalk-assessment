import { GAME_RESULTS_MESSAGES } from "../constants";
import { GameModel } from "../models/gameModel";
import { IGame } from "../types/game";
import { generateCards, shuffleCards } from "../utils/game";

export const createGame = async function (): Promise<IGame | null> {
  const cards = shuffleCards(generateCards());

  const game = new GameModel({
    cards,
    matchedCards: [],
    startTime: new Date(),
    endTime: new Date(),
    status: "active",
    history: [],
  });
  if (!game) {
    return null;
  }
  const gameSaveResponse: IGame = await game.save();

  return gameSaveResponse;
};

export const getLeaderboard = async function (): Promise<IGame[] | null> {
  const leaderboard = await GameModel.find({ status: "completed" }, null, {
    sort: { history: -1 },
  }).limit(5);

  if (!leaderboard) {
    throw new Error(GAME_RESULTS_MESSAGES.LEADERBOARD_ERROR);
  }

  const hasEqualNoOfAttempts = leaderboard.every((game, index, array) => {
    return game.history.length === array[0].history.length;
  });

  if (hasEqualNoOfAttempts) {
    leaderboard.sort((a, b) => {
      let duration =
        a.endTime.getTime() -
        a.startTime.getTime() -
        (b.endTime.getTime() - b.startTime.getTime());
      if (duration === 0) {
        return a.history.length - b.history.length;
      }
      return duration;
    });
  }

  return leaderboard;
};
