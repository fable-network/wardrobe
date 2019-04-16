/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import Badge from './Badge';

describe('Badge Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      const wrapper1 = shallow(<Badge appearance="primary">9</Badge>);
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(
        <Badge appearance="primary" size="small">
          9
        </Badge>
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(
        <Badge appearance="danger" size="large">
          9
        </Badge>
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = shallow(
        <Badge appearance="success" animated>
          9
        </Badge>
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = shallow(
        <Badge appearance="info" radius="none" size="large">
          Pre-pack
        </Badge>
      );
      expect(wrapper5).toMatchSnapshot();

      const wrapper6 = shallow(
        <Badge appearance="warning" radius="small" inverse>
          Acknowledged
        </Badge>
      );
      expect(wrapper6).toMatchSnapshot();
    });
  });
});
