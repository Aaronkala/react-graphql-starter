import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const ADD_TODO = gql`
  mutation todoAdd($value: String!) {
    todoAdd(value: $value) {
      id
      value
    }
  }
`;

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <Mutation mutation={ADD_TODO}>
        {todoAdd => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                todoAdd({ variables: { value: this.state.value } });
                this.setState({
                  value: '',
                });
              }}
            >
              <input value={this.state.value} onChange={this.handleChange} />
              <button type="submit">Add Todo</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}
