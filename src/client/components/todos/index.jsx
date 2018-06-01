import React, { Component } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Todo from './todo';

const LOAD_TODOS = gql`
  {
    todos {
      value
      id
    }
  }
`;

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Query query={LOAD_TODOS}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            return (
              <div>
                {data.todos.map(todo => (
                  <Todo value={todo.value} id={todo.id} key={todo.id} />
                ))}
              </div>
            );
          }}
        </Query>
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 0 20px;
`;
