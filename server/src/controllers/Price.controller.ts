import type { Request, Response } from 'express';
import { PriceService } from '../services/Price.service.js';
import formatResponse from '../utils/formatResponse.js';

export class PriceController {
  // Получить все цены
  static async getAllPrices(req: Request, res: Response) {
    try {
      const prices = await PriceService.getAllPrices();
      return res.status(200).json(formatResponse(200, 'Prices retrieved', prices));
    } catch (error) {
      console.error(error);
      return res.status(500).json(formatResponse(500, 'Server error'));
    }
  }

  // Обновить цену по id
  static async updatePrice(req: Request, res: Response) {
    try {
      const { id } = req.params;
      console.log(id);
      if (!id) {
        return res.status(400).json(formatResponse(400, 'Id is required'));
      }
      const data = req.body;
      console.log(data);
      if (!data) {
        return res.status(400).json(formatResponse(400, 'Data is required'));
      }
      const updated = await PriceService.updatePrice(Number(id), data);
      return res.status(200).json(formatResponse(200, 'Price updated', updated));
    } catch (error) {
      console.error(error);
      return res.status(500).json(formatResponse(500, 'Server error'));
    }
  }
}
