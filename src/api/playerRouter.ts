import express, { Express } from "express";
import { createPlayer } from "../controllers/playerController";

export default function (app: Express) {
  const router = express.Router();
  router.post("/createPlayer", createPlayer);
  app.use("/api", router);
}
