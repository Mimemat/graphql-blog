import React from 'react';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { ApolloProvider } from '@apollo/client';

import { client } from '../services/api';

import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;
