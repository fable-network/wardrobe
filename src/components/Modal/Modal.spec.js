import React from 'react';
import { mount } from 'enzyme';
import Modal from '.';

describe('components/Modal', () => {
  it('should show when `open` is `true`', () => {
    const wrapper = mount(
      <Modal open>
        <span data-testid="modal-content">Content</span>
      </Modal>
    );
    expect(wrapper.find('[data-testid="modal-content"]')).toHaveLength(1);
    wrapper.unmount();
  });
  it('should not show when `open` is `false`', () => {
    const wrapper = mount(<Modal open>Content</Modal>);
    expect(wrapper.find('Backdrop')).toHaveLength(0);
  });
  it('should call `onClose` on Esc press', () => {
    const onClose = jest.fn();
    const wrapper = mount(
      <Modal open onClose={onClose}>
        Content
      </Modal>
    );
    wrapper.instance().handleDocumentKeydown({ keyCode: 27 });
    expect(onClose).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });
  it('should call `onClose` when the backdrop is clicked', () => {
    const onClose = jest.fn();
    const wrapper = mount(
      <Modal open onClose={onClose}>
        Content
      </Modal>
    );
    wrapper.simulate('click');
    expect(onClose).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });
  it('should not call `onClose` when the modal is clicked', () => {
    const onClose = jest.fn();
    const wrapper = mount(
      <Modal open onClose={onClose}>
        <span data-testid="modal-content">Content</span>
      </Modal>
    );
    wrapper.find('[data-testid="modal-content"]').simulate('click');
    expect(onClose).toHaveBeenCalledTimes(0);
    wrapper.unmount();
  });
  it('should scope the focus on the modal when mounted', () => {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.focus();
    expect(input).toBe(global.document.activeElement);
    const wrapper = mount(
      <Modal open>
        <span data-testid="modal-content">Content</span>
      </Modal>
    );
    expect(wrapper.instance().modal).toBe(global.document.activeElement);
    document.body.removeChild(input);
    wrapper.unmount();
  });
  it('should scope the focus on the modal when open', () => {
    const wrapper = mount(
      <Modal open={false}>
        <span data-testid="modal-content">Content</span>
      </Modal>
    );
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.focus();
    expect(input).toBe(global.document.activeElement);
    wrapper.setProps({ open: true });
    expect(wrapper.instance().modal).toBe(global.document.activeElement);
    document.body.removeChild(input);
    wrapper.unmount();
  });
  it('should return the focus on the modal when closed', () => {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.focus();
    const wrapper = mount(
      <Modal open>
        <span data-testid="modal-content">Content</span>
      </Modal>
    );
    expect(wrapper.instance().modal).toBe(global.document.activeElement);
    wrapper.setProps({ open: false });
    expect(input).toBe(global.document.activeElement);
    document.body.removeChild(input);
    wrapper.unmount();
  });
  it('should return the focus on the modal when unmounted', () => {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.focus();
    const wrapper = mount(
      <Modal open>
        <span data-testid="modal-content">Content</span>
      </Modal>
    );
    expect(wrapper.instance().modal).toBe(global.document.activeElement);
    wrapper.unmount();
    expect(input).toBe(global.document.activeElement);
    document.body.removeChild(input);
  });
  it('should set body overflow to hidden on mount if open and allowed', () => {
    document.body.style.overflow = 'auto';
    const wrapper = mount(
      <Modal open>
        <span>Content</span>
      </Modal>
    );
    expect(document.body.style.overflow).toBe('hidden');
    wrapper.unmount();
  });
  it('should set body overflow to hidden on open if allowed', () => {
    document.body.style.overflow = 'auto';
    const wrapper = mount(
      <Modal open={false}>
        <span>Content</span>
      </Modal>
    );
    wrapper.setProps({ open: true });
    expect(document.body.style.overflow).toBe('hidden');
    wrapper.unmount();
  });
  it('should not set body overflow to hidden on mount if not allowed', () => {
    document.body.style.overflow = 'auto';
    const wrapper = mount(
      <Modal open preventGlobalScroll={false}>
        <span>Content</span>
      </Modal>
    );
    expect(document.body.style.overflow).toBe('auto');
    wrapper.unmount();
  });
  it('should not set body overflow to hidden on open if not allowed', () => {
    document.body.style.overflow = 'auto';
    const wrapper = mount(
      <Modal open={false} preventGlobalScroll={false}>
        <span>Content</span>
      </Modal>
    );
    wrapper.setProps({ open: true });
    expect(document.body.style.overflow).toBe('auto');
    wrapper.unmount();
  });
  it('should restore body overflow on close', () => {
    document.body.style.overflow = 'auto';
    const wrapper = mount(
      <Modal open>
        <span>Content</span>
      </Modal>
    );
    wrapper.setProps({ open: false });
    expect(document.body.style.overflow).toBe('auto');
    wrapper.unmount();
  });
  it('should restore body overflow on unmount', () => {
    document.body.style.overflow = 'auto';
    const wrapper = mount(
      <Modal open>
        <span>Content</span>
      </Modal>
    );
    wrapper.unmount();
    expect(document.body.style.overflow).toBe('auto');
  });
});
