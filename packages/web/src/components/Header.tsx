import React from 'react';

import GraphqLogo from '../assets/graphql.svg';

import { Container, SVGHeaderContainer } from '../styles/components/Header';

const Header: React.FC = () => {
  return (
    <Container>
      <SVGHeaderContainer href="/">
        <GraphqLogo />
        <h1>Graphql Blog</h1>
      </SVGHeaderContainer>
    </Container>
  );
};

export default Header;
