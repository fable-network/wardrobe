/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import Button from './Button';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('Button Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <Button appearance="primary">Push Me</Button>
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <Button appearance="primary" size="large">
          Push Me
        </Button>
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <Button appearance="primary" disabled>
          Don't Push Me
        </Button>
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = mount(
        <Button appearance="secondary">Push Me</Button>
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = mount(
        <Button appearance="secondary" disabled>
          Don't Push Me
        </Button>
      );
      expect(wrapper5).toMatchSnapshot();

      const wrapper6 = mount(
        <Button appearance="danger">Dangerous action</Button>
      );
      expect(wrapper6).toMatchSnapshot();

      const wrapper7 = mount(
        <Button appearance="success">Push Me</Button>
      );
      expect(wrapper7).toMatchSnapshot();

      const wrapper8 = mount(
        <Button appearance="warning">Push Me</Button>
      );
      expect(wrapper8).toMatchSnapshot();

      const wrapper9 = mount(
        <Button appearance="link">Push Me</Button>
      );
      expect(wrapper9).toMatchSnapshot();

      const wrapper10 = mount(
        <Button appearance="link" disabled>
          Don't Push Me
        </Button>
      );
      expect(wrapper10).toMatchSnapshot();

      const wrapper11 = mount(
        <Button appearance="primary" renderAs="span">
          I'm not a button
        </Button>
      );
      expect(wrapper11).toMatchSnapshot();

    });
  });
});
