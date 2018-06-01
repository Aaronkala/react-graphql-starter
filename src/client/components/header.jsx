import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Head>
    <H1>Things to get done</H1>
  </Head>
);

const Head = styled.div`
  width: 100%;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  color: white;
  font-size: 1.4em;
  font-weight: 300;
  margin-bottom: 0;
  position: relative;
  &:after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: -0.2em;
    left: -1em;
    height: 0.8em;
    width: 5.7em;
    background-color: ${p => p.theme.colors.alert};
  }
`;

export default Header;
