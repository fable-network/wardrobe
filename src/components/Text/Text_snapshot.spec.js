/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import Text from './Text';

describe('Text Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      const wrapper1 = shallow(
        <Text bold size="XXXL" renderAs="h1">
          Some text in the h1 style
        </Text>
      );
      expect(wrapper1).toMatchSnapshot();
    });
  });
});
