import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: ${props => props.theme.colors.grayHard};
    position: absolute;
    font-size: 20px;
    left: 40px;
  }

  input {
    height: 56px;
    background: ${props => props.theme.bgInput};
    width: 100%;
    border: 0;
    outline: 0;
    border-radius: 10px;
    padding: 14px;
    padding-left: 50px;

    font-size: 16px;

    &::placeholder {
      color: ${props => props.theme.colors.grayHard};
    }
  }
`;
