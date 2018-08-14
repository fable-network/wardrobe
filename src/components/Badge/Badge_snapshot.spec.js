/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import Badge from './Badge';

describe('Badge Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(<Badge appearance="primary">9</Badge>);
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(<Badge appearance="danger">9</Badge>);
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(<Badge appearance="success" animated>9</Badge>);
      expect(wrapper3).toMatchSnapshot();

    });
  });
});
