import { PrismaClient } from '../generated/prisma/index.js';
import nodemailer from 'nodemailer';
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

export async function generate2FACode(userId: number, email: string) {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 минут
  await prisma.username.update({
    where: { id: userId },
    data: { twoFACode: code, twoFACodeExpires: expires },
  });
  try {
    await send2FACodeEmail(email, code);
  } catch (e) {
    // Откатываем код, если письмо не отправлено
    await prisma.username.update({
      where: { id: userId },
      data: { twoFACode: null, twoFACodeExpires: null },
    });
    throw new Error('Ошибка отправки письма: ' + (e instanceof Error ? e.message : e));
  }
}

export async function send2FACodeEmail(email: string, code: string) {
  // Настройки для mail.ru
  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, // Для 465 обязательно true
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    logger: true,
    debug: true,
  });
  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: email,
    subject: 'Ваш код подтверждения',
    text: `Ваш код подтверждения: ${code}`,
  });
}

export async function verify2FACode(userId: number, code: string): Promise<boolean> {
  const user = await prisma.username.findUnique({ where: { id: userId } });
  if (!user || !user.twoFACode || !user.twoFACodeExpires) return false;
  if (user.twoFACode === code && user.twoFACodeExpires > new Date()) {
    await prisma.username.update({
      where: { id: userId },
      data: { twoFACode: null, twoFACodeExpires: null },
    });
    return true;
  }
  return false;
}
