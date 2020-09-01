import React from 'react';

import { Container, Logo, Title } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src="./logo_pokedash.svg" alt="" />
      </Logo>

      <Title>
        <h1>POKEMÓN CHALLENGE</h1>
      </Title>
    </Container>
  );
};

export default Header;
