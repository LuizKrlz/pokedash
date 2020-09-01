import styled from 'styled-components';

export const Container = styled.header`
  height: 116px;
  background: ${props => props.theme.colors.main};
  display: flex;
  align-items: center;
  padding: 18px 30px;
  position: fixed;
  width: 100%;
  max-width: 1156px;
  top: 0;
`;

export const Logo = styled.div`
  height: 80px;
  width: 80px;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 28px;
    line-height: 33px;
    font-weight: bold;
    font-style: normal;
  }
`;
