/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(
        <LoadingSpinner />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(
        <LoadingSpinner speed=".5s" />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(
        <LoadingSpinner size="40px" />
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = shallow(
        <LoadingSpinner appearance="secondary" />
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = shallow(
        <LoadingSpinner appearance="success" />
      );
      expect(wrapper5).toMatchSnapshot();

      const wrapper6 = shallow(
        <LoadingSpinner appearance="warning" />
      );
      expect(wrapper6).toMatchSnapshot();

      const wrapper7 = shallow(
        <LoadingSpinner appearance="danger" />
      );
      expect(wrapper7).toMatchSnapshot();

      const wrapper8 = shallow(
        <LoadingSpinner appearance="light" />
      );
      expect(wrapper8).toMatchSnapshot();

      const wrapper9 = shallow(
        <LoadingSpinner appearance="dark" />
      );
      expect(wrapper9).toMatchSnapshot();

      const wrapper10 = shallow(
        <LoadingSpinner color="blue" gapColor="red" />
      );
      expect(wrapper10).toMatchSnapshot();

    });
  });
});
