/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import Badge from './Badge';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('Badge Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <Badge appearance="primary">9</Badge>
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <Badge appearance="primary" size="small">
          9
        </Badge>
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <Badge appearance="danger" size="large">
          9
        </Badge>
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = mount(
        <Badge appearance="success" animated>
          9
        </Badge>
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = mount(
        <Badge appearance="info" radius="none" size="large">
          Pre-pack
        </Badge>
      );
      expect(wrapper5).toMatchSnapshot();

      const wrapper6 = mount(
        <Badge appearance="warning" radius="small" inverse>
          Acknowledged
        </Badge>
      );
      expect(wrapper6).toMatchSnapshot();

    });
  });
});
