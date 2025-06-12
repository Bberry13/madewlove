import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

export class AuthService {
  // Метод регистрации пользователя
  static async register({
    email,
    username,
    password,
  }: {
    email: string;
    username: string;
    password: string;
  }) {
    // Проверяем, существует ли пользователь
    const existingUser = await prisma.username.findUnique({ where: { email } });

    if (existingUser) {
      return { user: existingUser, created: false };
    }

    // Создаём нового пользователя
    const user = await prisma.username.create({
      data: {
        email,
        name: username,
        password,
        role: 'USER', // если вы используете enum Role
      },
    });

    return { user, created: true };
  }

  // Получение пользователя по email
  static async getUserByEmail(email: string) {
    const user = await prisma.username.findUnique({ where: { email } });
    return user;
  }

  // Получение всех пользователей
  static async getAllUsers() {
    const users = await prisma.username.findMany();
    return users;
  }
}
