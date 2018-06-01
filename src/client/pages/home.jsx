import React, { Component } from 'react';

import Header from '../components/header';
import Todos from '../components/todos';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Todos />
      </div>
    );
  }
}
