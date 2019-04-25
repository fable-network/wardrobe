/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      const wrapper1 = shallow(<RadioButton label="Radio label" />);
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(<RadioButton selected label="Radio label" />);
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(<RadioButton selected={false} label="Radio label" />);
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = shallow(<RadioButton disabled label="Radio label" />);
      expect(wrapper4).toMatchSnapshot();
    });
  });
});
