import { GameModel } from "../models/gameModel";
import { PlayerGameMoveModel } from "../models/playerGameMoveModel";
import { IPlayerGameMove } from "../types/playerGameMove";

export const createPlayerGameMove = async (data: IPlayerGameMove) => {
  const { gameId, playerId, chosenCards } = data;

  if (!gameId || !playerId || !chosenCards || chosenCards.length !== 2) {
    throw new Error("Invalid move");
  }
  const game = await GameModel.findById(gameId);

  if (!game) {
    throw new Error("Game not found");
  }

  if (game.status !== "active") {
    throw new Error("Game is not active");
  }

  if (
    game.matchedCards.includes(chosenCards[0]) ||
    game.matchedCards.includes(chosenCards[1])
  ) {
    throw new Error("Cards already matched");
  }

  const winningMove = chosenCards[0] === chosenCards[1];

  if (winningMove) {
    game.matchedCards.push(chosenCards[0], chosenCards[1]);
  }
  game.cards = game.cards.filter(
    (card) => card !== chosenCards[0] && card !== chosenCards[1]
  );

  if (game.cards.length === 0) {
    game.status = "completed";
    game.endTime = new Date();
  }

  game.history.push(chosenCards.join(" "));

  const playerGameMove = new PlayerGameMoveModel({
    gameId,
    playerId,
    chosenCards,
    result: winningMove ? "match" : "no match",
  });

  const [gameSaveResponse, playerGameMoveSaveResponse] = await Promise.all([
    GameModel.updateOne({ _id: gameId }, game),
    playerGameMove.save(),
  ]);

  if (!gameSaveResponse || !playerGameMoveSaveResponse) {
    throw new Error("Error saving move");
  }

  return {
    game,
    playerGameMove: playerGameMoveSaveResponse,
    moveResult: winningMove ? "match" : "no match",
  };
};
