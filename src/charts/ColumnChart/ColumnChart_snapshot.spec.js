/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import ColumnChart from './ColumnChart';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('ColumnChart Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <ColumnChart
          title="Distribution of delivery"
          subtitle="Total: 480 pieces"
          data={require('../fixtures/column-chart.js').default}
          caption={({ y }) => (y === 1 ? 'piece' : 'pieces')}
        />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <ColumnChart
          title="Distribution of delivery"
          subtitle="Total: 42 pieces"
          data={require('../fixtures/column-chart-one.js').default}
          caption={({ y }) => (y === 1 ? 'piece' : 'pieces')}
          height={300}
        />
      );
      expect(wrapper2).toMatchSnapshot();

    });
  });
});
