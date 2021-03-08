import { OAuth2Client, LoginTicket } from 'google-auth-library';

export const validateToken = async (token: string): Promise<LoginTicket> => {
  const clientId = process.env.GOOGLE_CLIENT_ID || '';
  const client = new OAuth2Client(clientId);
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: clientId,
  });
  return ticket;
};
