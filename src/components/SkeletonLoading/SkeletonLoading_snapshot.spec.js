/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import SkeletonLoading from './SkeletonLoading';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('SkeletonLoading Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <SkeletonLoading shape="header" />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <SkeletonLoading shape="text" />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <SkeletonLoading width="200px" shape="square" />
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = mount(
        <SkeletonLoading width="200px" shape="circle" />
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = mount(
        <SkeletonLoading width="50%" height="100px" />
      );
      expect(wrapper5).toMatchSnapshot();

      const wrapper6 = mount(
        <SkeletonLoading color="cyan" shape="text" />
      );
      expect(wrapper6).toMatchSnapshot();

      const wrapper7 = mount(
        <SkeletonLoading baseColor="#333" shape="text" />
      );
      expect(wrapper7).toMatchSnapshot();

      const wrapper8 = mount(
        <SkeletonLoading animating={false} shape="header" />
      );
      expect(wrapper8).toMatchSnapshot();

    });
  });
});
