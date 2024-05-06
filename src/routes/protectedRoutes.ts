// protectedRoutes.ts

import express, { Request, Response } from 'express';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/protected-route', authenticateToken, (req: Request, res: Response) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  
  // Access req.user safely
  res.json(req.user);
});

export default router;
