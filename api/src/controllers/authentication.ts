import { asyncErrorHandler } from 'errors/asyncErrorHandler';
import { OAuth2Client } from 'google-auth-library';
import { User } from 'entities';
import { createEntity } from '../utils/typeorm';

export const verify = asyncErrorHandler(async (req, res) => {
  const clientId = process.env.GOOGLE_CLIENT_ID || '';
  const client = new OAuth2Client(clientId);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { token } = req.body;
  if (token) {
    const ticket = await client.verifyIdToken({
      idToken: token as string,
      audience: clientId,
    });
    // @ts-expect-error: email does not exists
    const { name, picture, email } = ticket.getPayload();
    if (email) {
      let user = await User.findOne({ email: email as string });
      if (!user) {
        user = await createEntity(User, {
          name: name as string,
          picture: picture as string,
          email: email as string,
        });
      }
      res.respond(user);
    }
  }
});
