import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import AddTodo from './components/addTodo';

const client = new ApolloClient({
  uri: '/api',
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Start</h1>
        <AddTodo />
      </div>
    </ApolloProvider>
  );
}
