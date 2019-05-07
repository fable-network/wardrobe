/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import Input from './Input';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('Input Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <Input type="text" placeholder="Empty state" value="" onChange={() => null} />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <Input type="text" value="Some text" onChange={() => null} />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <Input type="text" disabled placeholder="This input is disabled" />
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = mount(
        <Input
          type="text"
          placeholder="You could type something here"
          value="invalid value"
          onChange={() => null}
          invalid={true}
        />
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = mount(
        <Input
          type="text"
          placeholder="You could type something here"
        />
      );
      expect(wrapper5).toMatchSnapshot();

    });
  });
});
