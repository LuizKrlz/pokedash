import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.bgColor};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
    color: ${props => props.theme.colors.white}
  }

  #root {
    max-width: 1156px;
    position: relative;
    /* pra ficar centralizado */
    margin: 0 auto;
    padding: 0 20px 50px;
    display: flex;
    flex-direction: column;
  }

  button {
    cursor: pointer;
  }
`;
