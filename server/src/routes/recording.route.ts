import { Router } from 'express';
import { RecordingController } from '../controllers/Recording.controller.js';

const recordingRouter = Router();

recordingRouter.post('/', async (req, res) => {
  RecordingController.sendMessage;
});

export default recordingRouter;
