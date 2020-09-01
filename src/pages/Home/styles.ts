import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const List = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;
