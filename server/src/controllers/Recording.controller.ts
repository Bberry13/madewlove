import { Request, Response } from 'express';
import { RecordingService } from '../services/Recording.service.js';

export class RecordingController {
  static async sendMessage(req: Request, res: Response) {
    const { name, email, tel, message, personalData, oferta, mailing } = req.body;
    try {
      await RecordingService.sendMessage({ name, email, tel, message, personalData, oferta, mailing });
      return res
        .status(200)
        .json({ success: true, message: 'Заявка успешно отправлена' });
    } catch (error) {
      return res.status(500).json({
        error: 'Ошибка отправки заявки',
        details: error instanceof Error ? error.message : error,
      });
    }
  }
}
