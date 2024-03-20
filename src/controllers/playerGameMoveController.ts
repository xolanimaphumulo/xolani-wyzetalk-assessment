import { PLAYER_GAME_MOVE_RESULTS_MESSAGES } from "../constants/playerGameMove";
import { IPlayerGameMove } from "../types/playerGameMove";
const { STATUS_CODES } = require("../constants");
import { Request, Response } from "express";
import { constructResponse } from "../utils/response";
const playerGameMoveService = require("../services/playerGameMoveService");

export const createPlayerGameMove = async (req: Request, res: Response) => {
  try {
    const playerGameMove = await playerGameMoveService.createPlayerGameMove(
      req.body as unknown as IPlayerGameMove
    );
    return constructResponse(
      res,
      PLAYER_GAME_MOVE_RESULTS_MESSAGES.PLAYER_MOVE_SUCCESS,
      STATUS_CODES.OK,
      playerGameMove
    );
  } catch (error) {
    return constructResponse(
      res,
      PLAYER_GAME_MOVE_RESULTS_MESSAGES.PLAYER_MOVE_ERROR,
      STATUS_CODES.INTERNAL_SERVER_ERROR,
      null,
      error
    );
  }
};
