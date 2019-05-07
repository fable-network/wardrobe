/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import OverflowMenu from './OverflowMenu';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('OverflowMenu Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <OverflowMenu>
          <OverflowMenu.Item onClick={() => alert('this.edit()')}>Edit</OverflowMenu.Item>
          <OverflowMenu.Item onClick={() => alert('this.delete()')}>Delete</OverflowMenu.Item>
        </OverflowMenu>
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <OverflowMenu size="medium">
          <OverflowMenu.Item onClick={() => alert('this.edit()')}>Edit</OverflowMenu.Item>
          <OverflowMenu.Item onClick={() => alert('this.delete()')}>Delete</OverflowMenu.Item>
        </OverflowMenu>
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <OverflowMenu size="large">
          <OverflowMenu.Item onClick={() => alert('this.edit()')}>Edit</OverflowMenu.Item>
          <OverflowMenu.Item onClick={() => alert('this.delete()')}>Delete</OverflowMenu.Item>
        </OverflowMenu>
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = mount(
        <OverflowMenu persist>
          <p>Some sample text</p>
        </OverflowMenu>
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = mount(
        <OverflowMenu position="left">
          <OverflowMenu.Item>Edit</OverflowMenu.Item>
          <OverflowMenu.Item>Delete</OverflowMenu.Item>
        </OverflowMenu>
      );
      expect(wrapper5).toMatchSnapshot();

      const wrapper6 = mount(
        <OverflowMenu appearance="primary">
          <OverflowMenu.Item>Edit</OverflowMenu.Item>
          <OverflowMenu.Item>Delete</OverflowMenu.Item>
        </OverflowMenu>
      );
      expect(wrapper6).toMatchSnapshot();

      const wrapper7 = mount(
        <OverflowMenu appearance="danger">
          <OverflowMenu.Item>Edit</OverflowMenu.Item>
          <OverflowMenu.Item>Delete</OverflowMenu.Item>
        </OverflowMenu>
      );
      expect(wrapper7).toMatchSnapshot();

      const wrapper8 = mount(
        <OverflowMenu color="red">
          <OverflowMenu.Item>Action 1</OverflowMenu.Item>
          <OverflowMenu.Item>Action 2</OverflowMenu.Item>
        </OverflowMenu>
      );
      expect(wrapper8).toMatchSnapshot();

      const wrapper9 = mount(
        <OverflowMenu activeColor="blue">
          <OverflowMenu.Item>Action 1</OverflowMenu.Item>
          <OverflowMenu.Item>Action 2</OverflowMenu.Item>
        </OverflowMenu>
      );
      expect(wrapper9).toMatchSnapshot();

      const wrapper10 = mount(
        <OverflowMenu open={true}>
          <OverflowMenu.Title>You can't close me</OverflowMenu.Title>
          <OverflowMenu.Item>Action 1</OverflowMenu.Item>
          <OverflowMenu.Item>Action 2</OverflowMenu.Item>
        </OverflowMenu>
      );
      expect(wrapper10).toMatchSnapshot();

    });
  });
});
