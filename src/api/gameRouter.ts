import express, { Express } from "express";
import { createGame, leaderboard } from "../controllers/gameController";

export default function (app: Express) {
  const router = express.Router();
  router.post("/createGame", createGame);
  router.get("/leaderboard", leaderboard);
  app.use("/api", router);
}
