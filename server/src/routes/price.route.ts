import { Router } from 'express';
import { PriceController } from '../controllers/Price.controller.js';

const priceRouter = Router();

// Получить все цены
priceRouter.get('/', async (req, res) => {
  await PriceController.getAllPrices(req, res);
});

// Обновить цену по id
priceRouter.put('/:id', async (req, res) => {
  await PriceController.updatePrice(req, res);
});

export default priceRouter;
