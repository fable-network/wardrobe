/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import OverflowMenu from './OverflowMenu';

describe('OverflowMenu Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(<OverflowMenu> <OverflowMenu.Item onClick={() => alert("this.edit()")}> Edit </OverflowMenu.Item> <OverflowMenu.Item onClick={() => alert("this.delete()")}> Delete </OverflowMenu.Item></OverflowMenu>);
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(<OverflowMenu position="left"> <OverflowMenu.Item> Edit </OverflowMenu.Item> <OverflowMenu.Item> Delete </OverflowMenu.Item></OverflowMenu>);
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(<OverflowMenu appearance="primary"> <OverflowMenu.Item> Edit </OverflowMenu.Item> <OverflowMenu.Item> Delete </OverflowMenu.Item></OverflowMenu>);
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = shallow(<OverflowMenu appearance="secondary"> <OverflowMenu.Item> Edit </OverflowMenu.Item> <OverflowMenu.Item> Delete </OverflowMenu.Item></OverflowMenu>);
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = shallow(<OverflowMenu color='red'> <OverflowMenu.Item> Action 1 </OverflowMenu.Item> <OverflowMenu.Item> Action 2 </OverflowMenu.Item></OverflowMenu>);
      expect(wrapper5).toMatchSnapshot();

      const wrapper6 = shallow(<OverflowMenu openByDefault={true}> <OverflowMenu.Title>Use the trigger to close me</OverflowMenu.Title> <OverflowMenu.Item> Action 1 </OverflowMenu.Item> <OverflowMenu.Item> Action 2 </OverflowMenu.Item></OverflowMenu>);
      expect(wrapper6).toMatchSnapshot();

      const wrapper7 = shallow(<OverflowMenu openByDefault={true} appearance="primary"> <OverflowMenu.Item> Action 1 </OverflowMenu.Item> <OverflowMenu.Item> Action 2 </OverflowMenu.Item></OverflowMenu>);
      expect(wrapper7).toMatchSnapshot();

    });
  });
});
