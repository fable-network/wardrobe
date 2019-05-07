/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import LoadingSpinner from './LoadingSpinner';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('LoadingSpinner Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <LoadingSpinner />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <LoadingSpinner speed=".5s" />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <LoadingSpinner size="40px" />
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = mount(
        <LoadingSpinner appearance="secondary" />
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = mount(
        <LoadingSpinner appearance="success" />
      );
      expect(wrapper5).toMatchSnapshot();

      const wrapper6 = mount(
        <LoadingSpinner appearance="warning" />
      );
      expect(wrapper6).toMatchSnapshot();

      const wrapper7 = mount(
        <LoadingSpinner appearance="danger" />
      );
      expect(wrapper7).toMatchSnapshot();

      const wrapper8 = mount(
        <LoadingSpinner appearance="light" />
      );
      expect(wrapper8).toMatchSnapshot();

      const wrapper9 = mount(
        <LoadingSpinner appearance="dark" />
      );
      expect(wrapper9).toMatchSnapshot();

      const wrapper10 = mount(
        <LoadingSpinner color="blue" gapColor="red" />
      );
      expect(wrapper10).toMatchSnapshot();

    });
  });
});
