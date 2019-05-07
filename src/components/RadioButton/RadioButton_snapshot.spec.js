/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import RadioButton from './RadioButton';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('RadioButton Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <RadioButton label="Radio label" />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <RadioButton selected label="Radio label" readOnly />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <RadioButton selected={false} label="Radio label" />
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = mount(
        <RadioButton disabled label="Radio label" />
      );
      expect(wrapper4).toMatchSnapshot();

    });
  });
});
