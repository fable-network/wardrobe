import { createGlobalStyle } from 'styled-components';
import { theme } from '../theme';

const ChartGlobalStyle = createGlobalStyle`
    @import 'https://code.highcharts.com/css/highcharts.css';
    .highcharts-container {
          font-family: ${theme.fontFamily};
    }
  `;

export default ChartGlobalStyle;
