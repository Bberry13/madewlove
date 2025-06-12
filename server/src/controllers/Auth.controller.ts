import type { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieConfig from '../configs/cookieConfig.js';
import formatResponse from '../utils/formatResponse.js';
import generateTokens from '../utils/generateTokens.js';

const prisma = new PrismaClient();

const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET!;
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET!;

export class AuthController {
  // Регистрация
  static async signup(req: Request, res: Response) {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json(formatResponse(400, 'Missing required fields'));
    }

    try {
      const existingUser = await prisma.username.findUnique({ where: { email } });

      if (existingUser) {
        return res.status(409).json(formatResponse(409, 'User already exists'));
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.username.create({
        data: {
          email,
          name: username,
          password: hashedPassword,
          role: 'USER',
        }, 
      });

      const { password: _, ...safeUser } = user;
      const { accessToken, refreshToken } = generateTokens({
        id: user.id,
        email: user.email,
        role: user.role,
      });

      return res
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .json(formatResponse(201, 'User registered', { accessToken, user: safeUser }));
    } catch (error) {
      console.error(error);
      return res.status(500).json(formatResponse(500, 'Server error'));
    }
  }

  // Вход
  static async signin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json(formatResponse(400, 'Missing email or password'));
    }

    try {
      const user = await prisma.username.findUnique({ where: { email } });

      if (!user) {
        return res.status(401).json(formatResponse(401, 'Invalid credentials'));
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json(formatResponse(401, 'Invalid credentials'));
      }

      const { password: _, ...safeUser } = user;
      const { accessToken, refreshToken } = generateTokens({
        id: user.id,
        email: user.email,
        role: user.role,
      });

      return res
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .json(formatResponse(200, 'Login successful', { accessToken, user: safeUser }));
    } catch (error) {
      console.error(error);
      return res.status(500).json(formatResponse(500, 'Server error'));
    }
  }

  // Выход
  static async signout(req: Request, res: Response) {
    return res
      .clearCookie('refreshToken', cookieConfig.refresh)
      .json(formatResponse(200, 'Signed out successfully'));
  }

  // Обновление токенов
  static async refreshTokens(req: Request, res: Response) {
    try {
      const user = await prisma.username.findUnique({ where: { id: req.user?.id } });
      if (!user) {
        return res.status(404).json(formatResponse(404, 'User not found'));
      }

      const { accessToken, refreshToken } = generateTokens({
        id: user.id,
        email: user.email,
        role: user.role,
      });

      return res
        .cookie('refreshToken', refreshToken, cookieConfig.refresh)
        .json(formatResponse(200, 'Tokens refreshed', { accessToken }));
    } catch (error) {
      console.error(error);
      return res.status(500).json(formatResponse(500, 'Server error'));
    }
  }

  // Получить текущего пользователя
  static async currentUser(req: Request, res: Response) {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json(formatResponse(401, 'Unauthorized'));
      }

      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, ACCESS_SECRET) as jwt.JwtPayload;

      const user = await prisma.username.findUnique({ where: { id: decoded.id } });
      if (!user) {
        return res.status(404).json(formatResponse(404, 'User not found'));
      }

      const { password: _, ...safeUser } = user;
      return res.status(200).json(formatResponse(200, 'User retrieved', safeUser));
    } catch (error) {
      console.error(error);
      return res.status(401).json(formatResponse(401, 'Invalid or expired token'));
    }
  }

  static async getAllUsers(req: Request, res: Response) {
    const users = await prisma.username.findMany();
    return res.status(200).json(formatResponse(200, 'Users retrieved', users));
  }
}
