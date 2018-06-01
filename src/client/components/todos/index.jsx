import React, { Component } from 'react';
import styled from 'styled-components';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <h2>h2 header</h2>
        <p>
          p - long paragraph of p text just to test out font size and make
          iterations to it. This will greatly affect the look and feel of the
          application so it is super importatnt to get right.
        </p>
        <h3>h3 header</h3>
        <p>
          p - long paragraph of p text just to test out font size and make
          iterations to it. This will greatly affect the look and feel of the
          application so it is super importatnt to get right.
        </p>
        <h4>h4 header</h4>
        <p>
          p - long paragraph of p text just to test out font size and make
          iterations to it. This will greatly affect the look and feel of the
          application so it is super importatnt to get right.
        </p>
        <h5>h5 header</h5>
        <p>
          p - long paragraph of p text just to test out font size and make
          iterations to it. This will greatly affect the look and feel of the
          application so it is super importatnt to get right.
        </p>
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 0 20px;
`;
