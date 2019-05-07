/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import WithLabel from './WithLabel';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('WithLabel Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <WithLabel label="Total WSP">
          EUR <span style={{ textDecoration: 'line-through' }}>15,982.09</span>{' '}
          <span style={{ color: 'red' }}>12,345.67</span>
        </WithLabel>
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <WithLabel label="Pieces">0</WithLabel>
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <WithLabel label="RRP" direction="horizontal" style={{ width: '300px' }}>
          EUR 69.99
        </WithLabel>
      );
      expect(wrapper3).toMatchSnapshot();

    });
  });
});
