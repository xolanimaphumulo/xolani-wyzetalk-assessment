import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { connectToDB } from "./utils/mongo";

import Routers from "./api/index";

const app = express();
connectToDB()
  .then((res) => {})
  .catch((e) => {
    console.log(e);
  });

Routers(app);

const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
