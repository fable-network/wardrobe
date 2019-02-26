/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import PieChart from './PieChart';

describe('PieChart Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(
        <PieChart
          title="Distribution of themes"
          data={require('../fixtures/pie-chart.js').data}
          tooltip={require('../fixtures/pie-chart.js').tooltip}
        />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(
        <PieChart
          title="Distribution of themes"
          data={require('../fixtures/pie-chart-custom-colors.js').data}
          colors={require('../fixtures/pie-chart-custom-colors.js').colors}
        />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(
        <PieChart
          data={require('../fixtures/pie-chart-one.js').data}
          colors={require('../fixtures/pie-chart-one.js').colors}
          tooltip={require('../fixtures/pie-chart-one.js').tooltip}
        />
      );
      expect(wrapper3).toMatchSnapshot();

    });
  });
});
