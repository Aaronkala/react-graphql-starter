import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>{this.props.value}</div>;
  }
}
