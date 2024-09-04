import { Request, Response, NextFunction } from 'express';
import * as admin from 'firebase-admin';

interface IRequest extends Request {
  user?: admin.auth.DecodedIdToken;
}

// Middleware to check Firebase ID token
export const authenticate = async (req: IRequest, res: Response, next: NextFunction) => {
  const idToken = req.headers.authorization?.split('Bearer ')[1];
  if (!idToken) {
    return res.status(401).send('Unauthorized');
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    return next();
  } catch (error) {
    return res.status(401).send('Unauthorized');
  }
};
