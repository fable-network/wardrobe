/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import Searchbar from './Searchbar';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('Searchbar Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <Searchbar />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <Searchbar iconPosition="left" />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <Searchbar placeholder="Search for dresses" />
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = mount(
        <Searchbar iconPosition="left" defaultValue="Floral dress" loading />
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = mount(
        <Searchbar iconPosition="right" defaultValue="Floral dress" loading />
      );
      expect(wrapper5).toMatchSnapshot();

    });
  });
});
