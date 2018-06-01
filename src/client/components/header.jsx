import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Head>
    <H1>Things to get done</H1>
  </Head>
);

const Head = styled.div`
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: center;
`;

const H1 = styled.h1`
  color: white;
`;

export default Header;
