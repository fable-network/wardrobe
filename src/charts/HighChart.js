import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';

class HighChart extends React.Component {
  static propTypes = {
    options: PropTypes.object,
    callback: PropTypes.func,
    allowChartUpdate: PropTypes.bool,
    /**
     * `redraw` HighCharts option: https://api.highcharts.com/class-reference/Highcharts.Chart#update
     */
    redraw: PropTypes.bool,
    /**
     * `oneToOne` HighCharts option: https://api.highcharts.com/class-reference/Highcharts.Chart#update
     */
    oneToOne: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    allowChartUpdate: false,
    redraw: true,
    oneToOne: true,
  };

  componentDidMount() {
    this.chart = Highcharts.chart(
      this.container,
      this.props.options,
      this.props.callback ? this.props.callback : undefined
    );
  }

  componentDidUpdate() {
    const { allowChartUpdate, redraw, oneToOne, options } = this.props;
    if (this.chart && allowChartUpdate !== false) {
      this.chart.update(options, redraw, oneToOne);
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }

  handleRef = container => {
    this.container = container;
  };

  render() {
    return <div ref={this.handleRef} className={this.props.className} />;
  }
}

export default HighChart;
