import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { theme as defaultTheme } from '../../theme';
import HighChart from '../HighChart';

const highlightedCss = css`
  .highcharts-point.highcharts-color-0 {
    fill: ${p => p.theme.grey06};

    &.highcharts-point-hover {
      fill: ${p => p.theme.backgroundInfo};
      fill-opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  position: relative;

  .ft-wardrobe-column-chart {
    .highcharts-point.highcharts-color-0 {
      &,
      &.highcharts-point-hover {
        fill: ${p => p.theme.backgroundInfo};
        fill-opacity: 1;
      }
    }
    ${p => p.highlighted && highlightedCss};

    .highcharts-yaxis-grid {
      display: none;
    }
    .highcharts-xaxis .highcharts-axis-line {
      stroke: ${p => p.theme.primaryActive};
      stroke-width: 2px;
    }
    div.highcharts-xaxis-labels {
      display: flex;
      font-size: ${p => p.theme.fontSizeSmall};
      line-height: ${p => p.theme.lineHeightSmall};
      font-weight: 400;
      color: ${p => p.theme.grey01};
      text-align: center;
    }
    .highcharts-credits {
      display: none;
    }
    .ft-label-block {
      display: block;
      text-align: center;
      box-sizing: border-box;

      .ft-label.ft-label-value {
        display: block;
        font-size: ${p => p.theme.fontSizeLarge};
        line-height: ${p => p.theme.lineHeightControlLarge};
        font-weight: ${p => p.theme.fontWeightBold};
        color: ${p => p.theme.grey01};
      }
      .ft-label.ft-label-caption {
        font-size: ${p => p.theme.fontSizeSmall};
        line-height: ${p => p.theme.lineHeightControlSmall};
        font-weight: ${p => p.theme.fontWeightNormal};
        color: ${p => p.theme.grey03};
      }

      &.ft-label-block-disabled {
        .ft-label.ft-label-value {
          color: ${p => p.theme.grey04};
        }
        .ft-label.ft-label-caption {
          color: ${p => p.theme.grey04};
        }
      }
    }
    .highcharts-subtitle {
      color: ${p => p.theme.grey01};
      font-size: ${p => p.theme.fontSizeSmall};
      line-height: ${p => p.theme.lineHeightSmall};
      font-weight: ${p => p.theme.fontWeightBold};
    }
  }
`;

class ColumnChart extends React.PureComponent {
  state = { highlightIndex: null };

  handleMouseOver = ({ target }) => {
    this.setState({ highlightIndex: target.index });
  };

  handleMouseOut = () => {
    this.setState({ highlightIndex: null });
  };

  renderLabel = ({ value, pos }) => (pos < this.props.data.length ? value : '');

  renderValue = (value, total) => {
    const { caption } = this.props;
    if (value === undefined) return '';
    const percentage = (100 * value.y) / total;
    const captionHtml = `<span class="ft-label ft-label-caption">
      ${typeof caption === 'function' && caption({ y: value.y, percentage })}
    </span>`;
    return `
      <span class="ft-label-block">
        <span class="ft-label ft-label-value">${value.y}</span>
        ${captionHtml}
      </span>
    `;
  };

  render() {
    const { data, title, subtitle, allowUpdate, theme = defaultTheme, height = null } = this.props;
    if (!data) {
      return null;
    }
    const { highlightIndex } = this.state;
    const { renderValue, renderLabel } = this;
    const total = data.reduce((sum, item) => sum + item.y, 0);
    const options = {
      title: title && {
        text: title,
      },
      subtitle: subtitle && {
        text: subtitle,
        align: 'right',
        verticalAlign: 'top',
      },
      chart: {
        type: 'column',
        backgroundColor: theme.white,
        styledMode: true,
        groupPadding: 0,
        height,
      },
      plotOptions: {
        series: {
          groupPadding: 0,
          events: {
            mouseOver: this.handleMouseOver,
            mouseOut: this.handleMouseOut,
          },
        },
        column: {
          borderRadius: 4,
          pointPadding: 0.01,
          groupPadding: 0,
          maxPointWidth: 230,
          dataLabels: {
            enabled: true,
            color: 'black',
            useHTML: true,
            formatter: function formatter() {
              return renderValue(this, total);
            },
          },
        },
      },
      xAxis: {
        // Min and minRange to make it generate extra void data points to align the only col left
        minRange: 3,
        min: 0,
        // It requires categories in advance to plan for space allocation
        categories: data.map(point => point.name),
        gridLineWidth: 0,
        tickWidth: 0,
        offset: 4,
        lineWidth: 0,
        labels: {
          useHTML: true,
          formatter: function formatter() {
            return renderLabel(this);
          },
        },
      },
      yAxis: {
        title: false,
        labels: { enabled: false },
        gridLineWidth: 0,
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
        outside: false, // Don't change unless you want to re-do the whole tooltip styling
        useHTML: true,
        shadow: true,
        backgroundColor: theme.white,
        borderColor: theme.grey04,
        borderRadius: 0,
        padding: 8,
      },
      series: [{ data }],
    };
    return (
      <Wrapper highlighted={highlightIndex !== null}>
        <HighChart
          options={options}
          className="ft-wardrobe-column-chart"
          allowChartUpdate={allowUpdate}
        />
      </Wrapper>
    );
  }
}

ColumnChart.defaultProps = {
  allowUpdate: false,
  caption: ({ y }) => y,
};

ColumnChart.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      y: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  caption: PropTypes.func,
  height: PropTypes.number,
  /**
   * Allows HighCharts chart update. Use it if you plan to provide new data.
   */
  allowUpdate: PropTypes.bool,
  // from withTheme
  theme: PropTypes.object.isRequired,
};

export default withTheme(ColumnChart);
