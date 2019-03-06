/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import WithLabel from './WithLabel';

describe('WithLabel Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(
        <WithLabel label="Total WSP">
          EUR <span style={{ textDecoration: 'line-through' }}>15,982.09</span>{' '}
          <span style={{ color: 'red' }}>12,345.67</span>
        </WithLabel>
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(
        <WithLabel label="Pieces">0</WithLabel>
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(
        <WithLabel label="RRP" direction="horizontal" style={{ width: '300px' }}>
          EUR 69.99
        </WithLabel>
      );
      expect(wrapper3).toMatchSnapshot();

    });
  });
});
