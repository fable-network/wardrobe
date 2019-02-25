import { injectGlobal } from 'styled-components';

const injectGlobalStyles = () =>
  injectGlobal`
    @import 'https://code.highcharts.com/css/highcharts.css';
  `;

injectGlobalStyles();
