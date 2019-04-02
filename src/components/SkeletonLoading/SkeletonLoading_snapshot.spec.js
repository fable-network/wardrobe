/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import SkeletonLoading from './SkeletonLoading';

describe('SkeletonLoading Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(
        <SkeletonLoading shape="header" />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(
        <SkeletonLoading shape="text" />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(
        <SkeletonLoading width="200px" shape="square" />
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = shallow(
        <SkeletonLoading width="200px" shape="circle" />
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = shallow(
        <SkeletonLoading width="50%" height="100px" />
      );
      expect(wrapper5).toMatchSnapshot();

      const wrapper6 = shallow(
        <SkeletonLoading color="cyan" shape="text" />
      );
      expect(wrapper6).toMatchSnapshot();

      const wrapper7 = shallow(
        <SkeletonLoading baseColor="#333" shape="text" />
      );
      expect(wrapper7).toMatchSnapshot();

      const wrapper8 = shallow(
        <SkeletonLoading animating={false} shape="header" />
      );
      expect(wrapper8).toMatchSnapshot();

    });
  });
});
