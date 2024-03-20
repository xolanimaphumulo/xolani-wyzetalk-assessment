import { Express } from "express";
import gameRouter from "./gameRouter";
import playerGameMoveRouter from "./playerGameMoveRouter";

export default function (app: Express) {
  gameRouter(app);
  playerGameMoveRouter(app);
}
