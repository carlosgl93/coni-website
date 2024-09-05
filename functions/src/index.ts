import { setGlobalOptions } from 'firebase-functions/v2/options';
import { onRequest } from 'firebase-functions/v2/https';
import { app } from './app';

setGlobalOptions({
  region: 'southamerica-west1',
  timeoutSeconds: 15,
  maxInstances: 1,
  memory: '128MiB',
});

export const api = onRequest(app);