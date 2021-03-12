import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import App from './App';
import theme from './theme';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './context/AuthProvider';
import LoaderProvider from './context/LoaderProvider';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <LoaderProvider>
        <CSSReset />
        <App />
      </LoaderProvider>
    </AuthProvider>
  </ChakraProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
