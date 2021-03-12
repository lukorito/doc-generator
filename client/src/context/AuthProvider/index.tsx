import { useToast } from '@chakra-ui/react';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import React, { createContext, useContext, useState } from 'react';
import verifyToken from '../../utils/verifyToken';

type AuthProviderProps = {
  handleLoginSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
  handleLoginFailure: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
  setIsAuthenticated: (status: boolean) => void;
  isAuthenticated: boolean;
};
const AuthContext = createContext<Partial<AuthProviderProps>>({});

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const toast = useToast();

  const handleLoginSuccess = async (response: any) => {
    try {
      await verifyToken(response.tokenId);
      setIsAuthenticated(true);
      localStorage.setItem('authToken', response.tokenId);
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
      toast({
        title: 'An error occurred.',
        description: 'Unable to login',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleLoginFailure = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response, 'e');
    toast({
      title: 'An error occurred.',
      description: 'Unable to login',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{
        handleLoginSuccess,
        handleLoginFailure,
        setIsAuthenticated,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
