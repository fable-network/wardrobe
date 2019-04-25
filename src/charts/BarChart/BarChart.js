import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { theme as defaultTheme } from '../../theme';
import HighChart from '../HighChart';
import { tooltipCss, hideCreditsCss } from '../HighChartCss';

const highlightedCss = css`
  .highcharts-point.highcharts-color-0 {
    fill: ${p => p.theme.grey06};

    &.highcharts-point-hover {
      fill: ${p => p.theme.primaryActive};
      fill-opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  .ft-wardrobe-bar-chart {
    .highcharts-point.highcharts-color-0 {
      &,
      &.highcharts-point-hover {
        transition: fill 250ms;
        stroke-width: 0;
        fill: ${p => p.theme.primaryActive};
        fill-opacity: 1;
      }
    }
    ${p => p.highlighted && highlightedCss};

    .highcharts-yaxis-grid {
      .highcharts-grid-line {
        stroke-dasharray: 4;
      }
    }
    .highcharts-xaxis .highcharts-axis-line {
      stroke: ${p => p.theme.grey04};
      stroke-width: 2px;
    }
    div.highcharts-xaxis-labels {
      font-size: ${p => p.theme.fontSizeXSmall};
      line-height: ${p => p.theme.lineHeightXSmall};
      font-weight: 400;
      color: ${p => p.theme.grey01};

      .ft-label-block {
        display: block;

        .ft-label.ft-label-category {
          display: block;
          max-width: 100%;
          ${p => p.orientation === 'horizontal' && `
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: right;
          `};
          ${p => p.orientation === 'vertical' && `white-space: normal;`};
        }

        &.ft-label-block-disabled {
          .ft-label.ft-label-category {
            color: ${p => p.theme.grey04};
          }
        }
      }
    }

    ${tooltipCss} ${hideCreditsCss};
  }
`;

class BarChart extends React.PureComponent {
  state = { highlightIndex: null };

  handleMouseOver = ({ target }) => {
    const { index } = target;
    this.setState({ highlightIndex: index });
  };

  handleMouseOut = () => {
    this.setState({ highlightIndex: null });
  };

  renderLabel = (pos, category) => {
    const { highlightIndex } = this.state;
    const className = `ft-label-block ${
      highlightIndex !== null && highlightIndex !== pos ? 'ft-label-block-disabled' : ''
      }`;
    return `
      <span class="${className}" data-index="${pos}" title="${category}">
        <span class="ft-label ft-label-category">
          ${category}
        </span>
      </span>
    `;
  };

  renderValue = (value, total) => {
    const percent = ((100 * value) / total).toFixed(0);
    if (percent > 100) return '100%';
    return `${percent}%`;
  };

  render() {
    const { renderLabel, renderValue, handleMouseOver, handleMouseOut } = this;
    const {
      data,
      title,
      tooltip,
      orientation,
      allowUpdate,
      theme = defaultTheme,
      height = null,
      width = null,
    } = this.props;
    if (!data) {
      return null;
    }
    const { highlightIndex } = this.state;
    const pointWidth = data.length > 10 && orientation === 'horizontal' ? 6 : 8;
    const total = data.reduce((sum, item) => sum + item.y, 0);
    const options = {
      title: title && {
        text: title,
      },
      chart: {
        type: orientation === 'horizontal' ? 'bar' : 'column',
        backgroundColor: theme.white,
        styledMode: true,
        groupPadding: 0,
        height,
        width,
      },
      plotOptions: {
        series: {
          groupPadding: 0,
          events: {
            mouseOver: handleMouseOver,
            mouseOut: handleMouseOut,
          },
        },
        bar: {
          borderRadius: pointWidth / 2,
          pointWidth,
          stickyTracking: true,
        },
        column: {
          borderRadius: pointWidth / 2,
          pointWidth,
          stickyTracking: true,
        },
      },
      xAxis: {
        // It requires categories in advance to plan for space allocation
        categories: data.map(point => point.name),
        gridLineWidth: 0,
        tickWidth: 0,
        offset: 1,
        lineWidth: 0,
        labels: {
          useHTML: true,
          formatter: function formatter() {
            return renderLabel(this.pos, this.value);
          },
        },
      },
      yAxis: {
        title: false,
        labels: {
          formatter: function formatter() {
            return renderValue(this.value, total);
          },
        },
        gridLineWidth: 0,
      },
      legend: {
        enabled: false,
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
          const percentage = (100 * this.y) / total;
          const body = tooltip({ ...this, percentage });
          return `<span class="ft-tooltip">
            <span class="ft-tooltip-header">${this.x}</span>
            <span class="ft-tooltip-body">${body}</span>
          </span>`;
        },
      },
      series: [{ data }],
    };
    return (
      <Wrapper highlighted={highlightIndex !== null} orientation={orientation}>
        <HighChart
          options={options}
          className="ft-wardrobe-bar-chart"
          allowChartUpdate={allowUpdate}
        />
      </Wrapper>
    );
  }
}

BarChart.defaultProps = {
  orientation: 'horizontal',
  tooltip: ({ y }) => y,
  allowUpdate: false,
  height: null,
  width: null,
};

BarChart.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      y: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  tooltip: PropTypes.func,
  height: PropTypes.number,
  width: PropTypes.number,
  /**
   * Allows HighCharts chart update. Use it if you plan to provide new data.
   */
  allowUpdate: PropTypes.bool,
  // from withTheme
  theme: PropTypes.object.isRequired,
};

export default withTheme(BarChart);
