import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';

class HighChart extends React.PureComponent {
  static propTypes = {
    options: PropTypes.object,
    callback: PropTypes.func,
    allowChartUpdate: PropTypes.bool,
    updateArgs: PropTypes.arrayOf(PropTypes.bool),
    className: PropTypes.string,
  };

  componentDidMount() {
    this.chart = Highcharts.chart(
      this.container,
      this.props.options,
      this.props.callback ? this.props.callback : undefined
    );
  }

  componentDidUpdate() {
    if (this.chart && this.props.allowChartUpdate !== false) {
      this.chart.update(this.props.options, ...(this.props.updateArgs || [true, true]));
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
