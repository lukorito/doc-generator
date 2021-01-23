import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, CSSReset } from "@chakra-ui/react"

import App from './App';
import theme from "./theme"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ChakraProvider theme={theme}>
      <CSSReset/>
      <App />
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
