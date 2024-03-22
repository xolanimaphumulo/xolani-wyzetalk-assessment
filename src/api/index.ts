import { Express } from "express";
import gameRouter from "./gameRouter";
import playerGameMoveRouter from "./playerGameMoveRouter";
import playerRouter from "./playerRouter";

export default function (app: Express) {
  gameRouter(app);
  playerGameMoveRouter(app);
  playerRouter(app);
}
