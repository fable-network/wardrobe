/* eslint-disable */
// This file was automatically generated
import React from 'react';
import 'jest-styled-components';
import Dialog from './Dialog';

import Button from '../Button'

jest.mock('../../charts/HighChart', () => () => <high-charts />);

describe('Dialog Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    
      const wrapper1 = mount(
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

      const wrapper2 = mount(
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

      const wrapper3 = mount(
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

      const wrapper4 = mount(
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

      const wrapper5 = mount(
        <Dialog showCloseButton={true} onClose={() => alert('close!')}>
          <Dialog.Body>
            Body-only dialogs can be used for modals with complex structure (e.g. to display product details).
          </Dialog.Body>
        </Dialog>
      );
      expect(wrapper5).toMatchSnapshot();

    });
  });
});
