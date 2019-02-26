/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import ColumnChart from './ColumnChart';

describe('ColumnChart Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(
        <ColumnChart
          title="Distribution of delivery"
          data={require('../fixtures/column-chart.js').default}
          caption={({ y }) => (y === 1 ? 'piece' : 'pieces')}
        />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(
        <ColumnChart
          title="Distribution of delivery"
          data={require('../fixtures/column-chart-one.js').default}
          caption={({ y }) => (y === 1 ? 'piece' : 'pieces')}
        />
      );
      expect(wrapper2).toMatchSnapshot();

    });
  });
});
