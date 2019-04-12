import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { theme as defaultTheme } from '../../theme';
import HighChart from '../HighChart';
import { tooltipCss, hideCreditsCss } from '../HighChartCss';

const getColors = p => {
  const colors = p.colors || p.theme.piePalette;
  let colorsCss = '';
  colors.forEach((color, i) => {
    colorsCss += `
        .highcharts-color-${i} {
          fill: ${color} !important;
          stroke: ${color};
      }`;
  });
  return colorsCss;
};

const Wrapper = styled.div`
  .ft-wardrobe-pie-chart {
    ${getColors};

    ${tooltipCss} ${hideCreditsCss};
  }
`;

class PieChart extends React.PureComponent {
  render() {
    const {
      data,
      colors,
      title,
      tooltip,
      allowUpdate,
      theme = defaultTheme,
      height = null,
    } = this.props;
    if (!data) return null;

    const options = {
      title: title && {
        text: title,
      },
      chart: {
        type: 'pie',
        backgroundColor: theme.white,
        styledMode: true,
        height,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
        },
      },

      tooltip: {
        enabled: true,
        outside: false, // Don't change unless you want to re-do the whole tooltip styling
        useHTML: true,
        shadow: true,
        backgroundColor: theme.white,
        borderColor: theme.grey04,
        borderRadius: 0,
        padding: 8,
        formatter: function formatter() {
          const body = tooltip({ ...this });
          return `<span class="ft-tooltip">
            <span class="ft-tooltip-header">${this.key}</span>
            <span class="ft-tooltip-body">${body}</span>
          </span>`;
        },
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          data,
        },
      ],
    };
    return (
      <Wrapper colors={colors}>
        <HighChart
          options={options}
          className="ft-wardrobe-pie-chart"
          allowChartUpdate={allowUpdate}
        />
      </Wrapper>
    );
  }
}

PieChart.defaultProps = {
  tooltip: ({ y }) => y,
  allowUpdate: false,
};

PieChart.propTypes = {
  title: PropTypes.string, // optional
  data: PropTypes.arrayOf(
    PropTypes.shape({
      y: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  tooltip: PropTypes.func, // optional
  colors: PropTypes.arrayOf(PropTypes.string), // optional (default is theme.defaultPalette)
  height: PropTypes.number,
  /**
   * Allows HighCharts chart update. Use it if you plan to provide new data.
   */
  allowUpdate: PropTypes.bool,
  // From withTheme
  theme: PropTypes.object.isRequired,
};

export default withTheme(PieChart);
