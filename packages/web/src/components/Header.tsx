import React, { useCallback } from 'react';

import { useRouter } from 'next/router';

import GraphqLogo from '../assets/graphql.svg';

import { Container, SVGHeaderContainer } from '../styles/components/Header';

const Header: React.FC = () => {
  const { push } = useRouter();

  const handleNavigate = useCallback(() => {
    push('/');
  }, [push]);

  return (
    <Container onClick={handleNavigate}>
      <SVGHeaderContainer href="/">
        <GraphqLogo />
        <h1>Graphql Blog</h1>
      </SVGHeaderContainer>
    </Container>
  );
};

export default Header;
