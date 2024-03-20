import express, { Express } from "express";
import { createPlayerGameMove } from "../controllers/playerGameMoveController";

export default function (app: Express) {
  const router = express.Router();
  router.post("/submitMove", createPlayerGameMove);
  app.use("/api", router);
}
