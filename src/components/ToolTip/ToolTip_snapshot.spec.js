/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import ToolTip from './ToolTip';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('ToolTip Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <ToolTip trigger={<span>Hover on me</span>} position="right">Tool tip body text</ToolTip>
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <ToolTip
          trigger={<span>Click me</span>}
          position="right"
          triggerAction="click"
        >
          Tool tip body text
        </ToolTip>
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <ToolTip
          trigger={<span>Click me</span>}
          position="right"
          triggerAction="click"
          displayTime={3000}
        >
          Count to 3
        </ToolTip>
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = mount(
        <ToolTip
          trigger={<span>Hover</span>}
          appearance="dark"
          position="right"
        >
          Tool tip body text
        </ToolTip>
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = mount(
        <ToolTip
          trigger={<span>Hover</span>}
          position="right"
          fluid
        >
          Takes up width of the content.
        </ToolTip>
      );
      expect(wrapper5).toMatchSnapshot();

      const wrapper6 = mount(
        <ToolTip
          trigger={<span>Hover</span>}
          position="top"
          fluid
        >
          I'm on top now
        </ToolTip>
      );
      expect(wrapper6).toMatchSnapshot();

      const wrapper7 = mount(
        <ToolTip
          trigger={<span>Hover</span>}
          position="bottom"
          fluid
        >
          I'm on the bottom now
        </ToolTip>
      );
      expect(wrapper7).toMatchSnapshot();

      const wrapper8 = mount(
        <ToolTip
          trigger={<span>Hover</span>}
          position="left"
          fluid
        >
          I'm on the left now
        </ToolTip>
      );
      expect(wrapper8).toMatchSnapshot();

    });
  });
});
