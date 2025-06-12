import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export class PriceService {
  // Получить все записи из таблицы PricePost
  static async getAllPrices() {
    return prisma.pricePost.findMany();
  }

  // Обновить одну запись по id
  static async updatePrice(
    id: number,
    data: Partial<{ price: number; name: string; description: string }>,
  ) {
    return prisma.pricePost.update({
      where: { id },
      data,
    });
  }
}
