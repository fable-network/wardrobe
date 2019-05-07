/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import Text from './Text';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('Text Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <Text bold size="XXXL" renderAs="h1">Some text in the h1 style</Text>
      );
      expect(wrapper1).toMatchSnapshot();

    });
  });
});
