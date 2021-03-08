import { InvalidToken } from 'errors/customErrors';
import { RequestHandler } from 'express';
import { validateToken } from 'utils/googleAuth';

export const verifyToken: RequestHandler = async (req, res, next) => {
  try {
    const authHeader = req.get('Authorization') || '';
    if (!authHeader) {
      throw new InvalidToken('Auth token not found in header');
    }
    const [bearer, token] = authHeader.split(' ');
    if (!token) {
      throw new InvalidToken('Auth token not found in header');
    }
    const ticket = await validateToken(token);
    // @ts-expect-error: email does not exists
    const { email } = ticket.getPayload();
    if (!email) {
      throw new InvalidToken('Auth token is invalid');
    }
    next();
  } catch (error) {
    console.log(error);
    throw new InvalidToken();
  }
};
