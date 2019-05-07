/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import TabBar from './TabBar';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('TabBar Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <TabBar>
          <TabBar.Item value="overview">Proposal overview</TabBar.Item>
          <TabBar.Item value="analytics">Analytics</TabBar.Item>
        </TabBar>
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <TabBar size="large" onSelect={console.log} defaultValue="analytics">
          <TabBar.Item value="overview">Proposal overview</TabBar.Item>
          <TabBar.Item value="analytics">Analytics</TabBar.Item>
        </TabBar>
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <TabBar align="left">
          <TabBar.Item value="overview">Proposal overview</TabBar.Item>
          <TabBar.Item value="analytics">Analytics</TabBar.Item>
        </TabBar>
      );
      expect(wrapper3).toMatchSnapshot();

    });
  });
});
