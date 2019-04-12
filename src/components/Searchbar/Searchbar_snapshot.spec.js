/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import Searchbar from './Searchbar';

describe('Searchbar Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(
        <Searchbar />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(
        <Searchbar iconPosition="left" />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(
        <Searchbar placeholder="Search for dresses" />
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = shallow(
        <Searchbar iconPosition="left" defaultValue="Floral dress" loading />
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = shallow(
        <Searchbar iconPosition="right" defaultValue="Floral dress" loading />
      );
      expect(wrapper5).toMatchSnapshot();

    });
  });
});
