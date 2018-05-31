import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const ADD_TODO = gql`
  mutation addTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

export default function AddTodo() {
  let input;
  return (
    <Mutation mutation={ADD_TODO}>
      {addTodo => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addTodo({ variables: { type: input.value } });
              input.value = '';
            }}
          >
            <input ref={node => (input = node)} />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </Mutation>
  );
}
