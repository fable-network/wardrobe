/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(
        <ProgressBar max={100} value={0} />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(
        <ProgressBar max={100} value={42} />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(
        <ProgressBar max={100} value={100} />
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = shallow(
        <ProgressBar max={100} value={42} appearance="warning" />
      );
      expect(wrapper4).toMatchSnapshot();

    });
  });
});
