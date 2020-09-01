import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${props => props.theme.bgCard};
  padding: 12px 25px;
  border-radius: 8px;
`;

export const NumberCard = styled.span`
  position: absolute;
  left: 10px;
  top: 10px;
  color: ${props => props.theme.colors.grayHard};
`;
