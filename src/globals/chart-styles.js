import { injectGlobal } from 'styled-components';
import { theme } from '../theme';

const injectGlobalStyles = () =>
  injectGlobal`
    @import 'https://code.highcharts.com/css/highcharts.css';
    .highcharts-container {
          font-family: ${theme.fontFamily};
    }
  `;

injectGlobalStyles();
