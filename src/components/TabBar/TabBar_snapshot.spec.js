/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import TabBar from './TabBar';

describe('TabBar Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(
        <TabBar>
          <TabBar.Item value="overview">Proposal overview</TabBar.Item>
          <TabBar.Item value="analytics">Analytics</TabBar.Item>
        </TabBar>
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(
        <TabBar size="large" onSelect={console.log} defaultValue="analytics">
          <TabBar.Item value="overview">Proposal overview</TabBar.Item>
          <TabBar.Item value="analytics">Analytics</TabBar.Item>
        </TabBar>
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(
        <TabBar align="left">
          <TabBar.Item value="overview">Proposal overview</TabBar.Item>
          <TabBar.Item value="analytics">Analytics</TabBar.Item>
        </TabBar>
      );
      expect(wrapper3).toMatchSnapshot();

    });
  });
});
