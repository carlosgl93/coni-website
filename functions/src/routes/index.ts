import { createAppointmentAdaptor } from '../interface-adaptors/createAppointmentAdaptor';
import { Router, Request, Response } from 'express';
import * as admin from 'firebase-admin';
import * as logger from 'firebase-functions/logger';

const router = Router();

// Define a simple route
router.get('/hello', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Define another route
router.get('/', async (req: Request, res: Response) => {
  logger.info('Getting data');
  const data = await admin.firestore().collection('data').get();
  res.json(data.docs.map((doc) => doc.data()));
});

router.post('/appointments', createAppointmentAdaptor);

export { router };
