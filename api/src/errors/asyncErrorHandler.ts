import { RequestHandler } from 'express';

export const asyncErrorHandler = (requestHandler: RequestHandler): RequestHandler => {
  return async (req, res, next): Promise<any> => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return await requestHandler(req, res, next);
    } catch (error) {
      console.log(error, 'error');
      next(error);
    }
  };
};
