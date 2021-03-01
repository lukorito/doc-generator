import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID || '');

// const verify = () => {
//   //   const ticket = await client.verifyIdToken({
//   //     idToken: token,
//   //     audience: CLIENT_ID,
//   //   });
//   //   const payload = ticket.getPayload();
// };
