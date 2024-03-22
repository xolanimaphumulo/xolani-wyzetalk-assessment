import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import app from "../src/index";
let server, agent;
beforeAll(async () => {
  const mongod = new MongoMemoryServer();
  const uri = mongod.getUri();
  process.env.MONGODB_URI = uri;
});

afterAll(async () => {
  await mongoose.disconnect();
});
