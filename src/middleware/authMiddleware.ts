import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../../config/default';
import { User } from '../../types/User';

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, config.accessTokenPrivateKey, (err, decoded) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = decoded as User; // Set the user property on the Request object
    next();
  });
}
