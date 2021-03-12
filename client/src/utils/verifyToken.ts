import instance from './axiosInstance';

const verifyToken = async (token: string) => {
  return await instance.post('/auth/verify-token', {
    token,
  });
};

export default verifyToken;
