/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

import Button from '../Button'
describe('Modal Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = shallow(
        <Modal size="normal" open={true}>
          <Modal.Header>You are changing the status of this order to Shipped</Modal.Header>
          <Modal.Body>This body has pre-defined paddings.</Modal.Body>
          <Modal.Footer>
            <Button appearance="primary" onClick={() => {}}>
              Let's do that!
            </Button>
            <Button onClick={() => {}}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      );
      expect(wrapper1).toMatchSnapshot();

      const wrapper2 = shallow(
        <Modal size="small" open={true}>
          <Modal.Header>You are changing the status of this order to Shipped</Modal.Header>
          <Modal.Body>This body has pre-defined paddings.</Modal.Body>
          <Modal.Footer>
            <Button appearance="primary" onClick={() => {}}>
              Let's do that!
            </Button>
            <Button onClick={() => {}}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      );
      expect(wrapper2).toMatchSnapshot();

      const wrapper3 = shallow(
        <Modal size="large" open={true}>
          <Modal.Header>You are changing the status of this order to Shipped</Modal.Header>
          <Modal.Body>This body has pre-defined paddings.</Modal.Body>
          <Modal.Footer>
            <Button appearance="primary" onClick={() => {}}>
              Let's do that!
            </Button>
            <Button onClick={() => {}}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      );
      expect(wrapper3).toMatchSnapshot();

      const wrapper4 = shallow(
        <Modal size="auto" open={true}>
          <Modal.Header>You are changing the status of this order to Shipped</Modal.Header>
          <Modal.Body>This body has pre-defined paddings.</Modal.Body>
          <Modal.Footer>
            <Button appearance="primary" onClick={() => {}}>
              Let's do that!
            </Button>
            <Button onClick={() => {}}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      );
      expect(wrapper4).toMatchSnapshot();

      const wrapper5 = shallow(
        <Modal open={true}>
          <Modal.Header>
            <h1>You can suppy your own header</h1>
          </Modal.Header>
          <Modal.Body>
            If you do so, styling is up to you. For example, see that this header also has default `h1`
            margins.
          </Modal.Body>
          <Modal.Footer>
            <Button appearance="primary" onClick={() => {}}>
              Ik snap het!
            </Button>
            <Button onClick={() => {}}>Nee!</Button>
          </Modal.Footer>
        </Modal>
      );
      expect(wrapper5).toMatchSnapshot();

      const wrapper6 = shallow(
        <Modal open={true}>
          <Modal.Header>
            Check out the body &darr;
          </Modal.Header>
          <div style={{ width: '100%', backgroundColor: 'black', color: 'white' }}>I'm full width!</div>
          <Modal.Footer>
            <Button appearance="primary" onClick={() => {}}>
              Got it!
            </Button>
            <Button onClick={() => {}}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      );
      expect(wrapper6).toMatchSnapshot();

    });
  });
});
