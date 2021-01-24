import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { Wrapper } from '../../components/Wrapper';
import { pdf as PDFImage } from '../../assets/images';
import { Text, H3 } from '../../components/Typography';
import { GoogleLoginButton } from '../../components/GoogleLoginButton';

const Auth = () => {
  const clientId = '562121853833-ban8f27oiajtke2dkrpkrpjkejlo80i.apps.googleusercontent.com';
  return (
    <Wrapper title='Sign in with google' alignItems='center'>
      <Box mt={[10, 20]} align='center' boxShadow='2xl' bg='white' width={['xs', 'sm']} borderRadius='lg' pb={12}>
        <Box w='100%' p={10}>
          <Image src={PDFImage} alt='PDF' boxSize='100px' objectFit='cover' />
        </Box>
        <Box px={10}>
          <H3 mb={4} color='gray.600'>Document Generator</H3>
          <Text>Sign up with your Google account to Edit and Preview Quotations online</Text>
        </Box>
        <Box mt={8}>
          <GoogleLoginButton clientId={clientId} />
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Auth;
