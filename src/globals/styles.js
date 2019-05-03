import { createGlobalStyle } from 'styled-components';
import 'what-input';
import { normalize, theme } from '../theme';

const fontFaces = `
@font-face {
  font-family: 'Avenir Next';
  src: url('/fonts/Avenir/AvenirNext-Light.ttf');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Avenir Next';
  src: url('/fonts/Avenir/AvenirNext-Regular.ttf');
  font-weight: 400;
  font-style: normal;
}


@font-face {
  font-family: 'Avenir Next';
  src: url('/fonts/Avenir/AvenirNext-Medium.ttf');
  font-weight: 500;
  font-style: normal;
}
`;

const GlobalStyle = createGlobalStyle`
  ${fontFaces}
  ${normalize};
  html, body {
    font-family: ${theme.fontFamily};
    font-weight: normal;
  }
  p > img:not([class]) {
    max-width: 360px;
  }
`;

export default GlobalStyle;
