import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import defaultTheme from '../../theme';
import HighChart from '../HighChart';

const getColors = (p) => {
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
    .highcharts-credits {
      display: none;
    }
  }
`;

class PieChart extends React.PureComponent {
  renderTooltip = (data) => {
    const { tooltip } = this.props;
    if (typeof tooltip === 'function') {
      return tooltip(data);
    }
    return false;
  };

  render() {
    const { data, colors, title, theme = defaultTheme } = this.props;
    if (!data) return null;

    const { renderTooltip } = this;
    const options = {
      title: {
        text: title && title,
      },
      chart: {
        type: 'pie',
        backgroundColor: theme.white,
        styledMode: true,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          }
        }
      },
      tooltip: {
        formatter: function formatter() {
          return renderTooltip(this);
        },
      },
      legend: {
        enabled: false,
      },
      series: [{
        data,
      }]
    };
    return (
      <Wrapper colors={colors}>
        <HighChart options={options} className="ft-wardrobe-pie-chart" />
      </Wrapper>
    );
  }
}

PieChart.defaultProps = {};

PieChart.propTypes = {
  title: PropTypes.string, // optional
  data: PropTypes.array.isRequired,
  tooltip: PropTypes.func, // optional
  colors: PropTypes.array, // optional (default is theme.defaultPalette)
  theme: PropTypes.object.isRequired,
};

export default withTheme(PieChart);
