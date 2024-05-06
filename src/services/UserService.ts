import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config/default';

const prisma = new PrismaClient();

export class UserService {
  async login(email: string, password: string): Promise<string> {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid password');
    }
    const accessToken = jwt.sign({ userId: user.id }, config.accessTokenPrivateKey, {
      expiresIn: config.accessTokenTtl,
    });
    return accessToken;
  }
}
