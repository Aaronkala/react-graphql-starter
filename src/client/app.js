import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: '/api',
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Query
        query={gql`
          {
            hello
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return <h1>{data.hello}</h1>;
        }}
      </Query>
    </ApolloProvider>
  );
}
