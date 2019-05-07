/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import Ruler from './Ruler';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('Ruler Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <Ruler />
      );
      expect(wrapper1).toMatchSnapshot();

    });
  });
});
