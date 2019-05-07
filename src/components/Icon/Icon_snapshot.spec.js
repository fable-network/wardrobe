/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import Icon from './Icon';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('Icon Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <Icon name="caret-down" />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <Icon name="caret-down" fill="orange" />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <Icon name="caret-down" width="100" height="20" style={{ background: 'khaki', fill: 'navy' }} />
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = mount(
        <Icon name="caret-down" width="20" height="50" style={{ background: 'khaki', fill: 'navy' }} />
      );
      expect(wrapper4).toMatchSnapshot();

    });
  });
});
