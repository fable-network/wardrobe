/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import Accordion from './Accordion';

describe('Accordion Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(
        <Accordion>
          <Accordion.Item title="A title"><p>some body text</p></Accordion.Item>
          <Accordion.Item title="Another title"><p>some more body text</p></Accordion.Item>
        </Accordion>
      );
      expect(wrapper1).toMatchSnapshot();

    });
  });
});
