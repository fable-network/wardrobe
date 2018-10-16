/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import Dialog from './Dialog';

import Button from '../Button'
describe('Dialog Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(
        <Dialog size="normal">
          <Dialog.Header>You are changing the status of this order to Shipped</Dialog.Header>
          <Dialog.Body>This body has pre-defined paddings.</Dialog.Body>
          <Dialog.Footer>
            <Button appearance="primary" onClick={() => {}}>
              Let us do that!
            </Button>
            <Button onClick={() => {}}>Cancel</Button>
          </Dialog.Footer>
        </Dialog>
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(
        <Dialog size="small">
          <Dialog.Header>You are changing the status of this order to Shipped</Dialog.Header>
          <Dialog.Body>This body has pre-defined paddings.</Dialog.Body>
          <Dialog.Footer>
            <Button appearance="primary" onClick={() => {}}>
              Let us do that!
            </Button>
            <Button onClick={() => {}}>Cancel</Button>
          </Dialog.Footer>
        </Dialog>
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(
        <Dialog size="large">
          <Dialog.Header>You are changing the status of this order to Shipped</Dialog.Header>
          <Dialog.Body>This body has pre-defined paddings.</Dialog.Body>
          <Dialog.Footer>
            <Button appearance="primary" onClick={() => {}}>
              Let us do that!
            </Button>
            <Button onClick={() => {}}>Cancel</Button>
          </Dialog.Footer>
        </Dialog>
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = shallow(
        <Dialog size="auto">
          <Dialog.Header>You are changing the status of this order to Shipped</Dialog.Header>
          <Dialog.Body>This body has pre-defined paddings.</Dialog.Body>
          <Dialog.Footer>
            <Button appearance="primary" onClick={() => {}}>
              Let us do that!
            </Button>
            <Button onClick={() => {}}>Cancel</Button>
          </Dialog.Footer>
        </Dialog>
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = shallow(
        <Dialog>
          <Dialog.Header>
            <h1 style={{ color: 'black' }}>You can suppy your own header</h1>
          </Dialog.Header>
          <Dialog.Body>
            If you do so, styling is up to you. For example, see that this header also has default `h1`
            margins.
          </Dialog.Body>
          <Dialog.Footer>
            <Button appearance="primary" onClick={() => {}}>
              Ik snap het!
            </Button>
            <Button onClick={() => {}}>Nee!</Button>
          </Dialog.Footer>
        </Dialog>
      );
      expect(wrapper5).toMatchSnapshot();

      const wrapper6 = shallow(
        <Dialog>
          <Dialog.Header>Check out the body &darr;</Dialog.Header>
          <div style={{ width: '100%', backgroundColor: 'black', color: 'white' }}>I'm full width!</div>
          <Dialog.Footer>
            <Button appearance="primary" onClick={() => {}}>
              Got it!
            </Button>
            <Button onClick={() => {}}>Cancel</Button>
          </Dialog.Footer>
        </Dialog>
      );
      expect(wrapper6).toMatchSnapshot();

    });
  });
});
