/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';

describe('Icon Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(<Icon name="caret-down" />);
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(<Icon name="caret-down" color="orange" />);
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(<Icon name="caret-down" width="100" height="20" style={{background: 'khaki', fill: 'navy'}}/>);
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = shallow(<Icon name="caret-down" width="20" height="50" style={{background: 'khaki', fill: 'navy'}}/>);
      expect(wrapper4).toMatchSnapshot();

    });
  });
});
