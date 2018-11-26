/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(
        <Input type="text" placeholder="Empty state" value="" onChange={() => null} />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(
        <Input type="text" value="Some text" onChange={() => null} />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(
        <Input type="text" disabled placeholder="This input is disabled" />
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = shallow(
        <Input
          type="text"
          placeholder="You could type something here"
          value="invalid value"
          onChange={() => null}
          invalid={true}
        />
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = shallow(
        <Input
          type="text"
          placeholder="You could type something here"
        />
      );
      expect(wrapper5).toMatchSnapshot();

    });
  });
});
