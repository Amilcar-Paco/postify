import express from "express";
import config from "../config/default"
import {connect} from "./utils/connect";
import logger from "./utils/logger";
import createServer from "./utils/server";

const port = config.port;

const app = createServer();

app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);

  await connect();
});