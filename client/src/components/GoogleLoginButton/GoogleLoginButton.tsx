import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@chakra-ui/react';
import { Text } from '../Typography';

type GoogleLoginButtonProps = {
  clientId: string;
  onSuccess?: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
  onFailure?: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
};

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({
  clientId,
  onSuccess,
  onFailure,
}) => {
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
        onSuccess={(response) => {
          if (onSuccess) {
            onSuccess(response);
          }
        }}
        onFailure={(response) => {
          if (onFailure) {
            onFailure(response);
          }
        }}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
};

export default GoogleLoginButton;
