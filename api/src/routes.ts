import * as authentication from 'controllers/authentication';
import { Application } from 'express';

export const attachPublicRoutes = (app: Application): void => {
  app.post('/auth/verify-token', authentication.verify);
};
