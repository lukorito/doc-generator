import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@chakra-ui/react';
import { Text } from '../Typography';

type GoogleLoginButtonProps = {
  clientId: string
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ clientId }) => {
  return (
    <>
      <GoogleLogin
        clientId={clientId}
        render={renderProps => (
          <Button variant='outline' bg='white' leftIcon={<FcGoogle />} as='button' onClick={renderProps.onClick}
                  disabled={renderProps.disabled}>
            <Text fontWeight='medium' color='blue.500' fontSize='sm'>Sign in with Google</Text>
          </Button>
        )}
        onSuccess={(response) => console.log(response, 'success')}
        onFailure={(response) => console.log(response, 'failed')}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
};

export default GoogleLoginButton;