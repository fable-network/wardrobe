export const tooltipCss = (p) => `
  .highcharts-tooltip {
    stroke: ${p.theme.grey04};
  
    .highcharts-tooltip-box {
      fill: ${p.theme.white};
      fill-opacity: 1;
    }
  
    .ft-tooltip {
      /* This is a hack to avoid labels showing *through* tooltips */
      display: block;
      position: relative;
      padding: 16px;
      top: -7px;
      left: -7px;
      margin-bottom: -17px;
      margin-right: -17px;
      background-color: ${p.theme.white};
  
      .ft-tooltip-header {
        display: block;
        font-size: ${p.theme.fontSizeSmall};
        line-height: ${p.theme.lineHeightSmall};
          font-weight: ${p.theme.fontWeightBold};
      }
  
      .ft-tooltip-body {
        font-size: ${p.theme.fontSizeSmall};
        line-height: ${p.theme.lineHeightSmall};
          font-weight: ${p.theme.fontWeightNormal};
      }
    }
  }
`;

export const hideCreditsCss = () => `
  .highcharts-credits {
    display: none;
  }
`;

export default tooltipCss;
