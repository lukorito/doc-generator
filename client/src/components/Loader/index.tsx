import { Spinner } from '@chakra-ui/spinner';
import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.19);
  position: absolute;
  z-index: 1000;
`;

const Loader = () => (
  <Wrapper>
    <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
  </Wrapper>
);

export default Loader;
