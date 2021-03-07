import { RequestHandler } from 'express';

export const verifyToken: RequestHandler = (req, res, next) => {
  try {
    console.log(req);
    console.log(req.get('Authorization'));
    next();
  } catch (error) {
    console.log(error);
  }
};
