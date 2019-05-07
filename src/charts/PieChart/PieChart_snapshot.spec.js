/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import PieChart from './PieChart';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('PieChart Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <PieChart
          title="Distribution of themes"
          data={require('../fixtures/pie-chart.js').data}
          tooltip={({ y, point: { percentage } }) => `Quantity: ${y}<br>Percent: ${percentage.toFixed(0)}%`}
        />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <PieChart
          title="Distribution of themes"
          data={require('../fixtures/pie-chart-custom-colors.js').data}
          colors={require('../fixtures/pie-chart-custom-colors.js').colors}
        />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <PieChart
          data={require('../fixtures/pie-chart-one.js').data}
          colors={require('../fixtures/pie-chart-one.js').colors}
          tooltip={({ y, point: { percentage } }) => `Quantity: ${y}<br>Percent: ${percentage.toFixed(0)}%`}
        />
      );
      expect(wrapper3).toMatchSnapshot();

    });
  });
});
