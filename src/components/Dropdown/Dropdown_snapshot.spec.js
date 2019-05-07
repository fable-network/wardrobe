/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import Dropdown from './Dropdown';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('Dropdown Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <Dropdown label="Don't push me">
          <Dropdown.Item>
            <nobr>...cause I'm close to the edge</nobr>
          </Dropdown.Item>
          <Dropdown.Item>
            <nobr>I'm trying not to lose my head</nobr>
          </Dropdown.Item>
          <Dropdown.Item>
            <nobr>It's like a jungle sometimes</nobr>
          </Dropdown.Item>
          <Dropdown.Item>
            <nobr>It makes me wonder how I keep from goin' under</nobr>
          </Dropdown.Item>
          <Dropdown.Item>
            <nobr>-- Grandmaster Flash</nobr>
          </Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <Dropdown label="Don't push me" size="large">
          <Dropdown.Item>
            <nobr>...cause I'm close to the edge</nobr>
          </Dropdown.Item>
          <Dropdown.Item>
            <nobr>I'm trying not to lose my head</nobr>
          </Dropdown.Item>
          <Dropdown.Item>
            <nobr>It's like a jungle sometimes</nobr>
          </Dropdown.Item>
          <Dropdown.Item>
            <nobr>It makes me wonder how I keep from goin' under</nobr>
          </Dropdown.Item>
          <Dropdown.Item>
            <nobr>-- Grandmaster Flash</nobr>
          </Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <Dropdown label="Don't push me" persist>
          <Dropdown.Item onSelect={() => alert('Clicked 1')}>
            <nobr>...cause I'm close to the edge</nobr>
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => alert('Clicked 2')}>
            <nobr>I'm trying not to lose my head</nobr>
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => alert('Clicked 3')}>
            <nobr>It's like a jungle sometimes</nobr>
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => alert('Clicked 4')}>
            <nobr>It makes me wonder how I keep from goin' under</nobr>
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => alert("Don't push me")}>
            <nobr>-- Grandmaster Flash</nobr>
          </Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = mount(
        <Dropdown label="Don't push me" preventOutOfBounds>
          <Dropdown.Item>
            <nobr>...cause I'm close to the edge</nobr>
          </Dropdown.Item>
          <Dropdown.Item>
            <nobr>I'm trying not to lose my head</nobr>
          </Dropdown.Item>
          <Dropdown.Item>
            <nobr>It's like a jungle sometimes</nobr>
          </Dropdown.Item>
          <Dropdown.Item>
            <nobr>It makes me wonder how I keep from goin' under</nobr>
          </Dropdown.Item>
          <Dropdown.Item>
            <nobr>-- Grandmaster Flash</nobr>
          </Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = mount(
        <Dropdown label="Don't push me" preventOutOfBounds={false}>
          <Dropdown.Item>
            <nobr>...cause I'm close to the edge</nobr>
          </Dropdown.Item>
          <Dropdown.Item>
            <nobr>I'm trying not to lose my head</nobr>
          </Dropdown.Item>
          <Dropdown.Item>
            <nobr>It's like a jungle sometimes</nobr>
          </Dropdown.Item>
          <Dropdown.Item>
            <nobr>It makes me wonder how I keep from goin' under</nobr>
          </Dropdown.Item>
          <Dropdown.Item>
            <nobr>-- Grandmaster Flash</nobr>
          </Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper5).toMatchSnapshot();

      const wrapper6 = mount(
        <Dropdown label="Push Me" persist>
          <nobr>You can place any content you prefer here.</nobr>
        </Dropdown>
      );
      expect(wrapper6).toMatchSnapshot();

      const wrapper7 = mount(
        <Dropdown invalid label="Don't push me">
          <Dropdown.Item>
            <nobr>...cause I'm close to the edge</nobr>
          </Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper7).toMatchSnapshot();

      const wrapper8 = mount(
        <Dropdown selected={true} label="Push Me">
          <Dropdown.Item>Check that checkmark</Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper8).toMatchSnapshot();

      const wrapper9 = mount(
        <Dropdown loading={true} label="Something is happening">
          <Dropdown.Item>Hold on I'm loading</Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper9).toMatchSnapshot();

      const wrapper10 = mount(
        <Dropdown disabled={true}>
          <Dropdown.Item>I'll never be seen</Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper10).toMatchSnapshot();

      const wrapper11 = mount(
        <Dropdown label={<h3>h3 label</h3>}>
          <Dropdown.Item>Hey there</Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper11).toMatchSnapshot();

      const wrapper12 = mount(
        <Dropdown open={true}>
          <Dropdown.Item>
            <nobr>You can't close me</nobr>
          </Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper12).toMatchSnapshot();

      const wrapper13 = mount(
        <Dropdown open={false} label="You can't open me">
          <Dropdown.Item>
            <nobr>You will never see me</nobr>
          </Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper13).toMatchSnapshot();

      const wrapper14 = mount(
        <Dropdown label="Don't push me" fluid={true}>
          <Dropdown.Item onSelect={() => alert('Clicked 1')}>
            <nobr>...cause I'm close to the edge</nobr>
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => alert('Clicked 2')}>
            <nobr>I'm trying not to lose my head</nobr>
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => alert('Clicked 3')}>
            <nobr>It's like a jungle sometimes</nobr>
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => alert('Clicked 4')}>
            <nobr>It makes me wonder how I keep from goin' under</nobr>
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => alert("Don't push me")}>
            <nobr>-- Grandmaster Flash</nobr>
          </Dropdown.Item>
        </Dropdown>
      );
      expect(wrapper14).toMatchSnapshot();

    });
  });
});
