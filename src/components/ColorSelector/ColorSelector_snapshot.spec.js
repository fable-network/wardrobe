/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import ColorSelector from './ColorSelector';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('ColorSelector Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <ColorSelector
          color="#e25454"
          disableInteraction={true}
        />
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <ColorSelector
          color="#5F9DC7"
          onClick={() => alert('Clicked!')}
        />
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <ColorSelector
          patternImage="images/patternImage.jpg"
        />
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = mount(
        <ColorSelector
          color="#aecc76"
          text="Lime green"
        />
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = mount(
        <ColorSelector
          color="#aecc76"
          selected={true}
          text="Lime green"
        />
      );
      expect(wrapper5).toMatchSnapshot();

      const wrapper6 = mount(
        <ColorSelector
          color="#e25454"
          fixedSize='40px'
          onClick={() => alert('40px')}
        />
      );
      expect(wrapper6).toMatchSnapshot();

      const wrapper7 = mount(
        <ColorSelector />
      );
      expect(wrapper7).toMatchSnapshot();

    });
  });
});
