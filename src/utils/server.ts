import express from "express";
import userRoutes from "../routes/userRoutes";
import protectedRoutes from "../routes/protectedRoutes";

function createServer() {
  const app = express();

  app.use(express.json());

  app.use('/api', userRoutes);
  app.use('/api', protectedRoutes);

  return app;
}

export default createServer;