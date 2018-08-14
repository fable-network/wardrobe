/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';
import DropdownItem from '../DropdownItem'
describe('Dropdown Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(<Dropdown label="Don't push me..."> <DropdownItem onClick={() => alert('Clicked 1')}> <nobr>...cause I'm close to the edge</nobr> </DropdownItem> <DropdownItem onClick={() => alert('Clicked 2')}> <nobr>I'm trying not to lose my head</nobr> </DropdownItem> <DropdownItem onClick={() => alert('Clicked 3')}> <nobr>It's like a jungle sometimes</nobr> </DropdownItem> <DropdownItem onClick={() => alert('Clicked 4')}> <nobr>It makes me wonder how I keep from goin' under</nobr> </DropdownItem> <DropdownItem onClick={() => alert('Don\'t push me')}> <nobr>-- Grandmaster Flash</nobr> </DropdownItem></Dropdown>);
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(<Dropdown label="Push Me"> <nobr>You can place any content you prefer here.</nobr></Dropdown>);
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(<Dropdown isSelected={true} label="Push Me"> <DropdownItem> Check that checkmark </DropdownItem></Dropdown>);
      expect(wrapper3).toMatchSnapshot();

    });
  });
});
