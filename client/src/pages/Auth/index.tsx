import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { Wrapper } from '../../components/Wrapper';
import { pdf as PDFImage } from '../../assets/images';
import { Text, H3 } from '../../components/Typography';
import { GoogleLoginButton } from '../../components/GoogleLoginButton';
import { useAuthContext } from '../../context/AuthProvider';
import { useHistory, useLocation } from 'react-router-dom';
import { useLoaderContext } from '../../context/LoaderProvider';
import verifyToken from '../../utils/verifyToken';

const Auth = () => {
  const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID as string;
  const {
    handleLoginSuccess,
    handleLoginFailure,
    isAuthenticated,
    setIsAuthenticated,
  } = useAuthContext();
  const { showLoader, hideLoader } = useLoaderContext();
  const history = useHistory();
  const location = useLocation<{ from: { pathname: string } }>();

  React.useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      if (showLoader) {
        showLoader();
      }
      verifyToken(storedToken)
        .then(() => {
          if (hideLoader) {
            hideLoader();
          }
          if (setIsAuthenticated) {
            setIsAuthenticated(true);
          }
        })
        .catch(() => {
          localStorage.removeItem('authToken');
          if (hideLoader) {
            hideLoader();
          }
          if (setIsAuthenticated) {
            setIsAuthenticated(false);
          }
        });
    }
  }, [showLoader, hideLoader, history, setIsAuthenticated]);

  React.useEffect(() => {
    if (isAuthenticated) {
      let to = { pathname: '/auth/' };
      if (location.state?.from) {
        to = location.state?.from;
      }
      history.push(to);
    }
  }, [isAuthenticated, history, location]);

  return (
    <Wrapper title="Sign in with google" alignItems="center">
      <Box
        mt={[10, 20]}
        align="center"
        boxShadow="2xl"
        bg="white"
        width={['xs', 'sm']}
        borderRadius="lg"
        pb={12}
      >
        <Box w="100%" p={10}>
          <Image src={PDFImage} alt="PDF" boxSize="100px" objectFit="cover" />
        </Box>
        <Box px={10}>
          <H3 mb={4} color="gray.600">
            Document Generator
          </H3>
          <Text>Login in with your Google account to Edit and Preview Quotations online</Text>
        </Box>
        <Box mt={8}>
          <GoogleLoginButton
            clientId={clientId}
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
          />
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Auth;
