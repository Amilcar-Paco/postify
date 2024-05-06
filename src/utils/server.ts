import express from "express";
import userRoutes from "../routes/userRoutes";
//import protectedRoutes from "../routes/protectedRoutes";
import categoryRouter from "../routes/categoryRoutes";
import postRouter from "../routes/postRoutes";

function createServer() {
  const app = express();

  app.use(express.json());

  app.use('/api', userRoutes);
 // app.use('/api', protectedRoutes);
 app.use('/categories', categoryRouter);
 app.use('/posts', postRouter);

  return app;
}

export default createServer;