/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import Accordion from './Accordion';


jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('Accordion Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
        <Accordion>
          <Accordion.Item title="A title">
            <p>some body text</p>
          </Accordion.Item>
          <Accordion.Item title="Another title">
            <p>some more body text</p>
          </Accordion.Item>
        </Accordion>
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = mount(
        <Accordion>
          <Accordion.Item title="A title">
            <p>some body text</p>
          </Accordion.Item>
          <Accordion.Item title="Another title" defaultOpen={true}>
            <p>some more body text</p>
          </Accordion.Item>
        </Accordion>
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = mount(
        <Accordion>
          <Accordion.Item title="A title" open={true}>
            <p>some body text</p>
          </Accordion.Item>
          <Accordion.Item title="Another title" open={false}>
            <p>some more body text</p>
          </Accordion.Item>
        </Accordion>
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = mount(
        <Accordion>
          <Accordion.Item title="A title" open={true}>
            <p>some body text</p>
          </Accordion.Item>
          <Accordion.Item title="Another title" open={true}>
            <p>some more body text</p>
          </Accordion.Item>
        </Accordion>
      );
      expect(wrapper4).toMatchSnapshot();

    });
  });
});
