/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import CheckBox from './CheckBox';

describe('CheckBox Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(
        <CheckBox label="Checkbox Label" />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(
        <CheckBox label="Checkbox Label" isChecked />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(
        <CheckBox label="Checkbox Label" isDisabled />
      );
      expect(wrapper3).toMatchSnapshot();

    });
  });
});
