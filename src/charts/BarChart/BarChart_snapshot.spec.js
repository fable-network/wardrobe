/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import BarChart from './BarChart';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('BarChart Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <BarChart title="Category mix" data={require('../fixtures/bar-chart-category-mix.js').default} />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <BarChart
          title="Category mix"
          data={require('../fixtures/bar-chart-category-mix-many.js').default}
          tooltip={({ y, percentage }) => `Quantity: ${y}<br>Percent: ${percentage.toFixed(0)}%`}
        />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <BarChart
          orientation="vertical"
          title="Price point"
          data={require('../fixtures/bar-chart-price-point.js').default}
          tooltip={({ y, percentage }) =>
            `Quantity: ${y}<br>Percent: ${percentage.toFixed(0)}%`
          }
        />
      );
      expect(wrapper3).toMatchSnapshot();

    });
  });
});
