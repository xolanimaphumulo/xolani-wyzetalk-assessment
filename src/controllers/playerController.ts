import { PLAYER_RESULTS_MESSAGES, STATUS_CODES } from "../constants";
import * as playerService from "../services/playerService";
import { IPlayer } from "../types/player";
import { Request, Response } from "express";
import { constructResponse } from "../utils/response";

export const createPlayer = async (req: Request, res: Response) => {
  try {
    const data = req.body as unknown as IPlayer;
    if (!data.fullName || !data.email) {
      return constructResponse(
        res,
        PLAYER_RESULTS_MESSAGES.MISSING_PLAYER_DATA,
        STATUS_CODES.BAD_REQUEST,
        null
      );
    }

    const player = await playerService.createPlayer(req.body);
    if (player) {
      return constructResponse(
        res,
        PLAYER_RESULTS_MESSAGES.PLAYER_CREATED_SUCCESSFULLY,
        STATUS_CODES.OK,
        player
      );
    } else {
      return constructResponse(
        res,
        PLAYER_RESULTS_MESSAGES.CREATE_PLAYER_ERROR,
        STATUS_CODES.INTERNAL_SERVER_ERROR,
        player
      );
    }
  } catch (error) {
    return constructResponse(
      res,
      PLAYER_RESULTS_MESSAGES.CREATE_PLAYER_ERROR,
      STATUS_CODES.INTERNAL_SERVER_ERROR,
      null,
      error
    );
  }
};
