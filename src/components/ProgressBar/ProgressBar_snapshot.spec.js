/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import ProgressBar from './ProgressBar';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('ProgressBar Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <ProgressBar max={100} value={0} />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <ProgressBar max={100} value={42} />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <ProgressBar max={100} value={100} />
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = mount(
        <ProgressBar max={100} value={42} appearance="warning" />
      );
      expect(wrapper4).toMatchSnapshot();

    });
  });
});
