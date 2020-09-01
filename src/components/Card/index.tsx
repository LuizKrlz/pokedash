import React from 'react';

import { Container, NumberCard } from './styles';

interface Props {
  number: number;
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children, number }) => {
  return (
    <Container>
      <NumberCard>#1</NumberCard>
      {children}
    </Container>
  );
};

export default Card;
