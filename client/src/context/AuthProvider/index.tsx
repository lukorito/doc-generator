import { useToast } from '@chakra-ui/react';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import React, { createContext, useContext } from 'react';
import { instance } from '../../utils';

type AuthProviderProps = {
  handleLoginSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
  handleLoginFailure: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
};
const AuthContext = createContext<Partial<AuthProviderProps>>({});

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const toast = useToast();

  const handleLoginSuccess = async (response: any) => {
    await instance.post('/auth/verify-token', {
      token: response.tokenId,
    });
    await sessionStorage.setItem('token', response.tokenId);
    instance.defaults.headers.common['Authorization'] = response.tokenId;
  };

  const handleLoginFailure = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response, 'e');
    toast({
      title: 'An error occurred.',
      description: 'Unable to login',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <AuthContext.Provider value={{ handleLoginSuccess, handleLoginFailure }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
