import React, { Component } from 'react';
import styled from 'styled-components';
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
        <Container>
          <Todos />
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;
