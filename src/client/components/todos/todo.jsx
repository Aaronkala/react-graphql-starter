import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import Checkbox from './checkbox';

export default class Todo extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      done: props.done,
    };
  }

  render() {
    return (
      <Flex>
        <Checkbox callback={this.finishTodo} checked={this.state.done} />
        <Input value={this.props.value} />
      </Flex>
    );
  }
}

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  color: ${p => p.theme.colors.text};
  font-size: 1em;
`;
