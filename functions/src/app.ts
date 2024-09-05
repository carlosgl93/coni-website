import * as express from 'express';
import * as cors from 'cors';
import * as logger from 'firebase-functions/logger';
import { router } from './routes';
// import * as admin from 'firebase-admin';

const app = express();
// admin.initializeApp();

logger.info('Express app started');

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Use the authentication middleware
// app.use(authenticate);

// Use the router for handling routes
app.use('/', router);

export { app };
