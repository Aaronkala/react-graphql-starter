import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const ALL_TODOS = gql`
  {
    todos {
      value
      id
    }
  }
`;

export default class ShowTodos extends Component {
  render() {
    return (
      <Query query={ALL_TODOS} pollInterval={1500}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <div>
              {data.todos.map(todo => (
                <div key={todo.id}>
                  <p>{todo.value}</p>
                  <p>{todo.id}</p>
                  <p>{todo.id.length}</p>
                </div>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}
