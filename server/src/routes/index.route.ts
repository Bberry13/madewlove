import { Router, Request, Response } from 'express';
import formatResponse from '../utils/formatResponse.js';
import authRouter from './auth.route.js';
import priceRouter from './price.route.js';
import recordingRouter from './recording.route.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/price', priceRouter);
router.use('/recording', recordingRouter)

router.use((req: Request, res: Response) => {
  res.status(404).json(formatResponse(404, 'Not found'));
});

export default router;
