/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import CheckBox from './CheckBox';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('CheckBox Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <CheckBox label="Checkbox Label" />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <CheckBox label="Checkbox Label" checked />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <CheckBox label="Checkbox Label" disabled />
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = mount(
        <CheckBox label="Checkbox Label" disabled checked />
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = mount(
        <CheckBox label="Checkbox Label" checked={null} />
      );
      expect(wrapper5).toMatchSnapshot();

    });
  });
});
