/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(
        <Dropdown label="Don't push me">
          <Dropdown.Item onClick={() => alert('Clicked 1')}>
            <nobr>...cause I'm close to the edge</nobr>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Clicked 2')}>
            <nobr>I'm trying not to lose my head</nobr>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Clicked 3')}>
            <nobr>It's like a jungle sometimes</nobr>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Clicked 4')}>
            <nobr>It makes me wonder how I keep from goin' under</nobr>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Don\'t push me')}>
            <nobr>-- Grandmaster Flash</nobr>
          </Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(
        <Dropdown label="Push Me">
          <nobr>You can place any content you prefer here.</nobr>
        </Dropdown>
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(
        <Dropdown isSelected={true} label="Push Me">
          <Dropdown.Item>
            Check that checkmark
          </Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = shallow(
        <Dropdown isLoading={true} label="Something is happening">
          <Dropdown.Item>
            Hold on I'm loading
          </Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = shallow(
        <Dropdown isDisabled={true}>
          <Dropdown.Item>
            I'll never be seen
          </Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper5).toMatchSnapshot();

      const wrapper6 = shallow(
        <Dropdown isOpen={true}>
          <Dropdown.Item>
            <nobr>You can't close me</nobr>
          </Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper6).toMatchSnapshot();

      const wrapper7 = shallow(
        <Dropdown isOpen={false} label="You can't open me">
          <Dropdown.Item>
            <nobr>You will never see me</nobr>
          </Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper7).toMatchSnapshot();

      const wrapper8 = shallow(
        <Dropdown label="Don't push me" isFluid={true}>
          <Dropdown.Item onClick={() => alert('Clicked 1')}>
            <nobr>...cause I'm close to the edge</nobr>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Clicked 2')}>
            <nobr>I'm trying not to lose my head</nobr>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Clicked 3')}>
            <nobr>It's like a jungle sometimes</nobr>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Clicked 4')}>
            <nobr>It makes me wonder how I keep from goin' under</nobr>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Don\'t push me')}>
            <nobr>-- Grandmaster Flash</nobr>
          </Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper8).toMatchSnapshot();

    });
  });
});
