import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Checkbox from './checkbox';

const ADD_TODO = gql`
  mutation todoAdd($value: String!) {
    todoAdd(value: $value) {
      id
      value
    }
  }
`;

export default class Todo extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    id: PropTypes.string,
    done: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      done: props.done,
      value: props.value,
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  // when submitting and also when losing focus
  handleSubmit = (e, todoAdd) => {
    e.preventDefault();
    todoAdd({ variables: { value: this.state.value } });
    this.setState({
      value: '',
    });
  };

  // update todo done
  toggleTodoDone = () => {
    this.setState({
      done: !this.state.done,
    });
  };

  render() {
    return (
      <Mutation mutation={ADD_TODO}>
        {todoAdd => (
          <FlexForm onSubmit={e => this.handleSubmit(e, todoAdd)}>
            <Checkbox
              callback={this.toggleTodoDone}
              checked={this.state.done}
            />
            {this.state.done ? (
              <Done done={this.state.done}>{this.state.value}</Done>
            ) : (
              <Input
                value={this.state.value}
                onChange={this.handleChange}
                done={this.state.done}
              />
            )}
          </FlexForm>
        )}
      </Mutation>
    );
  }
}

const FlexForm = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  padding: 0;
  width: 100%;
  color: ${p => (p.done ? p.theme.colors.gray[3] : p.theme.colors.text)};
  font-size: 1.2em;
  text-decoration: ${p => (p.done ? 'line-through' : 'initial')};
  &:focus {
    outline: none;
  }
`;

const Done = Input.withComponent('span');
