import { MOVE_ERRORS } from "../constants";
import { GameModel } from "../models/gameModel";
import { PlayerGameMoveModel } from "../models/playerGameMoveModel";
import { IPlayerGameMove } from "../types/playerGameMove";

export const createPlayerGameMove = async (data: IPlayerGameMove) => {
  const { gameId, playerId, chosenCards } = data;

  if (!gameId || !playerId || !chosenCards || chosenCards.length !== 2) {
    throw new Error("INVALID_MOVE");
  }
  const game = await GameModel.findById(gameId);

  if (!game) {
    throw new Error("GAME_NOT_FOUND");
  }

  if (game.status !== "active") {
    throw new Error("GAME_NOT_ACTIVE");
  }

  if (
    game.matchedCards.includes(chosenCards[0]) ||
    game.matchedCards.includes(chosenCards[1])
  ) {
    throw new Error("CARDS_ALREADY_MATCHED");
  }

  if (
    !game.cards.includes(chosenCards[0]) ||
    !game.cards.includes(chosenCards[1])
  ) {
    throw new Error("INVALID_MOVE");
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
    createdAt: new Date(),
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
