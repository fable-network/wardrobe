import { keyframes, css } from 'styled-components';
import { theme } from '../theme';

const commonCss = (color) => css`
  position: absolute;
  height: 100%;
  top: 0;
  background: ${color || theme.pageBackground};
`;

const skeleton = (color = theme.pageBackground) => keyframes`
  0% {
    ${commonCss(color)};
    width: 0%;
    left: 0;
    right: auto;
  }
  20% {
    ${commonCss(color)};
    width: 100%;
    left: 0;
    right: auto;
  }
  28% {
    ${commonCss(color)};
    width: 100%;
    left: auto;
    right: 0;
  }
  51% {
    ${commonCss(color)};
    width: 0%;
    left: auto;
    right: 0;
  }
  58% {
    ${commonCss(color)};
    width: 0%;
    left: auto;
    right: 0;
  }
  82% {
    ${commonCss(color)};
    width: 100%;
    left: auto;
    right: 0;
  }
  83% {
    ${commonCss(color)};
    width: 100%;
    left: 0;
    right: auto;
  }
  96% {
    ${commonCss(color)};
    width: 0%;
    left: 0;
    right: auto;
  }
  100% {
    ${commonCss(color)};
    width: 0%;
    left: 0;
    right: auto;
  }
`;

export default skeleton;
