import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import defaultTheme from '../../theme';
import HighChart from '../HighChart';

const highlightedCss = css`
  .highcharts-point.highcharts-color-0 {
    fill: ${p => p.theme.grey05};

    &.highcharts-point-hover {
      fill: ${p => p.theme.backgroundPrimary};
      fill-opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  .ft-wardrobe-column-chart {
    .highcharts-point.highcharts-color-0 {
      &,
      &.highcharts-point-hover {
        fill: ${p => p.theme.backgroundPrimary};
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

      .ft-label-block {
        display: block;

        .ft-label.ft-label-category {
          overflow: hidden;
          text-align: center;

          > span {
            display: block;
            max-width: 100%;
            height: calc(1rem * ${p => p.theme.lineHeightSmall});
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .ft-label.ft-label-value {
          display: block;
          margin-top: 0.75rem;
          font-size: 1.5rem;
          line-height: 1;
          font-weight: 500;
          color: ${p => p.theme.grey01};
        }
        .ft-label.ft-label-caption {
          color: ${p => p.theme.grey03};
        }

        &.ft-label-block-disabled {
          .ft-label.ft-label-value {
            color: ${p => p.theme.grey04};
          }
          .ft-label.ft-label-category,
          .ft-label.ft-label-caption {
            color: ${p => p.theme.grey04};
          }
        }
      }
    }
    .highcharts-credits {
      display: none;
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

  renderCategoryPart = categoryPart =>
    `
      <span>${categoryPart}</span>
    `;

  renderLabel = (pos, category) => {
    const { data, captionFormatter } = this.props;
    const { highlightIndex } = this.state;

    const className = `ft-label-block ${
      highlightIndex !== null && highlightIndex !== pos ? 'ft-label-block-disabled' : ''
    }`;
    const pointValue = data[pos];
    if (pointValue === undefined) return '';
    const caption = `<span class="ft-label ft-label-caption">
      ${(typeof captionFormatter === 'function' && captionFormatter(pointValue)) || ''}
    </span>`;
    return `
      <span class="${className}" data-index="${pos}">
        <span class="ft-label ft-label-category">
          ${
            typeof category === 'string'
              ? `<span>${category}</span>`
              : category.map(this.renderCategoryPart).join('')
          }
        </span>
        <span class="ft-label ft-label-value">${pointValue}</span>
        ${caption}
      </span>
    `;
  };

  render() {
    const { categories, data, title, theme = defaultTheme } = this.props;
    if (!categories || !data || categories.length !== data.length) {
      return null;
    }
    const { highlightIndex } = this.state;
    const { renderLabel } = this;
    const options = {
      title: title && {
        text: title,
      },
      chart: {
        type: 'column',
        backgroundColor: theme.white,
        styledMode: true,
        height: '33%',
        groupPadding: 0,
      },
      plotOptions: {
        series: {
          groupPadding: 0,
        },
        column: {
          borderRadius: 4,
          pointPadding: 0.01,
          groupPadding: 0,
          maxPointWidth: 230,
        },
      },
      xAxis: {
        // Min and minRange to make it generate extra void data points to align the only col left
        minRange: 3,
        min: 0,
        categories,
        gridLineWidth: 0,
        tickWidth: 0,
        offset: 4,
        lineWidth: 0,
        labels: {
          useHTML: true,
          formatter: function formatter() {
            return renderLabel(this.pos, this.value);
          },
        },
      },
      yAxis: {
        title: null,
        labels: { enabled: false },
        gridLineWidth: 0,
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      series: [
        {
          data,
          point: {
            events: {
              mouseOver: this.handleMouseOver,
              mouseOut: this.handleMouseOut,
            },
          },
        },
      ],
    };
    return (
      <Wrapper highlighted={highlightIndex !== null}>
        <HighChart options={options} className="ft-wardrobe-column-chart" />
      </Wrapper>
    );
  }
}

ColumnChart.defaultProps = {};

ColumnChart.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  captionFormatter: PropTypes.func,
  theme: PropTypes.object.isRequired,
};

export default withTheme(ColumnChart);
