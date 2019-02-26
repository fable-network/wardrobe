/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import BarChart from './BarChart';

describe('BarChart Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(
        <BarChart title="Category mix" data={require('../fixtures/bar-chart-category-mix.js').default} />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(
        <BarChart
          title="Category mix"
          data={require('../fixtures/bar-chart-category-mix-many.js').default}
          tooltip={({ y, percentage }) => `Quantity: ${y}<br>Percent: ${percentage.toFixed(0)}%`}
        />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(
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
