import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container } from './styles';

const Form: React.FC = () => {
  return (
    <Container>
      <FaSearch />
      <input placeholder="Type the Pokémon name" />
    </Container>
  );
};

export default Form;
