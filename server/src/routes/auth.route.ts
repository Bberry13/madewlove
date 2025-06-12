import { Router } from 'express';
import { AuthController } from '../controllers/Auth.controller.js';
import { verifyRefreshToken } from '../middlewares/verifyTokens.js';

const authRouter = Router();

// Регистрация
authRouter.post('/signup', async (req, res) => {
  await AuthController.signup(req, res);
});

// Вход
authRouter.post('/signin', async (req, res) => {
  await AuthController.signin(req, res);
});

// Выход
authRouter.post('/signout', async (req, res) => {
  await AuthController.signout(req, res);
});

// Обновление токенов
authRouter.post('/refresh', verifyRefreshToken, async (req, res) => {
  await AuthController.refreshTokens(req, res);
});

// Получение текущего пользователя
authRouter.get('/me', async (req, res) => {
  await AuthController.currentUser(req, res);
});

authRouter.get('/users', async (req, res) => {
  await AuthController.getAllUsers(req, res);
});

export default authRouter;
