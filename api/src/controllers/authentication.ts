import { asyncErrorHandler } from 'errors/asyncErrorHandler';
import { User } from 'entities';
import { validateToken } from 'utils/googleAuth';
import { createEntity } from 'utils/typeorm';

export const verify = asyncErrorHandler(async (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { token } = req.body;
  if (token) {
    const ticket = await validateToken(token);
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
