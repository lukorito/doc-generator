import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import { Button, useToast } from '@chakra-ui/react';
import { Text } from '../Typography';

type GoogleLoginButtonProps = {
  clientId: string;
};

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ clientId }) => {
  const toast = useToast();
  return (
    <>
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <Button
            variant="outline"
            bg="white"
            leftIcon={<FcGoogle />}
            as="button"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <Text fontWeight="medium" color="blue.500" fontSize="sm">
              Login in with Google
            </Text>
          </Button>
        )}
        onSuccess={(response) => console.log(response, 'success')}
        onFailure={() =>
          toast({
            title: 'An error occurred.',
            description: 'Unable to login',
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        }
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
};

export default GoogleLoginButton;
