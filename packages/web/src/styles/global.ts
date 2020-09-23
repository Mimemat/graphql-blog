import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.regular};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    font-family: ${(props) => props.theme.fonts.bold};
  }
`;
