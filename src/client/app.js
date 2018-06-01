import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/globalStyles';

import Home from './pages/home';

const client = new ApolloClient({
  uri: '/api',
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ApolloProvider>
  );
}
