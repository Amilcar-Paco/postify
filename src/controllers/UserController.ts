import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    try {
      const token = await this.userService.login(email, password);
      return res.json({ token });
    } catch (error) {
      return res.status(401).json({ error: 'Authentication failed. Invalid credentials.' });
    }
  }
}
