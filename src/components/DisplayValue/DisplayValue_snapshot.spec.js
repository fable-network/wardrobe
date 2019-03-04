/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import DisplayValue from './DisplayValue';

describe('DisplayValue Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(
        <DisplayValue label="Total WSP">
        EUR <span style={{textDecoration:'line-through'}}>15,982.09</span> <span style={{color:'red'}}>12,345.67</span>
        </DisplayValue>
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(
        <DisplayValue label="Pieces">0</DisplayValue>
      );
      expect(wrapper2).toMatchSnapshot();

    });
  });
});
