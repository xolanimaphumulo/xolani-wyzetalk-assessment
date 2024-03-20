import * as gameService from "../services/gameService";
import { Request, Response } from "express";
import { constructResponse } from "../utils/response";
import { GAME_RESULTS_MESSAGES, STATUS_CODES } from "../constants";

export const createGame = async (req: Request, res: Response) => {
  try {
    const game = await gameService.createGame();

    if (game) {
      return constructResponse(
        res,
        GAME_RESULTS_MESSAGES.GAME_CREATED_SUCCESSFULLY,
        STATUS_CODES.OK,
        game
      );
    } else {
      return constructResponse(
        res,
        GAME_RESULTS_MESSAGES.CREATE_GAME_ERROR,
        STATUS_CODES.INTERNAL_SERVER_ERROR,
        game
      );
    }
  } catch (error) {
    return constructResponse(
      res,
      GAME_RESULTS_MESSAGES.CREATE_GAME_ERROR,
      STATUS_CODES.INTERNAL_SERVER_ERROR,
      null,
      error
    );
  }
};

export const leaderboard = async (req: Request, res: Response) => {
  try {
    const leaderboard = await gameService.getLeaderboard();

    return constructResponse(
      res,
      GAME_RESULTS_MESSAGES.LEADERBOARD_SUCCESS,
      STATUS_CODES.OK,
      leaderboard
    );
  } catch (error) {
    return constructResponse(
      res,
      GAME_RESULTS_MESSAGES.LEADERBOARD_ERROR,
      STATUS_CODES.INTERNAL_SERVER_ERROR,
      null,
      error
    );
  }
};
