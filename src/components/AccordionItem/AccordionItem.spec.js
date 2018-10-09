import React from 'react';
import { mount } from 'enzyme';
import noop from '../../helpers/noop';
import AccordionItem from './AccordionItem';

const createWrapper = ({ children, ...otherProps } = {}) =>
  mount(<AccordionItem {...otherProps}>{children}</AccordionItem>);

const getDisplayState = wrapper =>
  wrapper
    .find('[data-testid="accordion-item--children-wrapper"]')
    .at(0)
    .props().open;

const createKeyDownEvent = keyCode => {
  const event = {
    keyCode,
    defaultPrevented: false,
    stopPropagation: noop,
  };
  event.preventDefault = () => {
    event.defaultPrevented = true;
  };
  return event;
};

describe('components/AccordionItem', () => {
  describe('uncontrolled behaviour', () => {
    it('should render closed with default prop values', () => {
      const wrapper = createWrapper();
      expect(getDisplayState(wrapper)).toBeFalsy();
    });
    it('should render open when defaultOpen is `true`', () => {
      const wrapper = createWrapper({ defaultOpen: true });
      expect(getDisplayState(wrapper)).toBe(true);
    });
    it('should open and close on click or spacebar/enter keydown', () => {
      const wrapper = createWrapper();
      wrapper.instance().handleKeyDown(createKeyDownEvent(32));
      wrapper.update();
      expect(getDisplayState(wrapper)).toBe(true);
      wrapper.instance().handleKeyDown(createKeyDownEvent(13));
      wrapper.update();
      expect(getDisplayState(wrapper)).toBe(false);
      wrapper
        .find('[data-testid="accordion-item--title-wrapper"]')
        .at(0)
        .simulate('click');
      expect(getDisplayState(wrapper)).toBe(true);
    });
    it('should fire `onToggle` event on click or keydown', () => {
      const onToggle = jest.fn();
      const wrapper = createWrapper({ onToggle });
      const titleWrapper = wrapper.find('[data-testid="accordion-item--title-wrapper"]').at(0);
      titleWrapper.simulate('click');
      expect(onToggle).toHaveBeenCalledTimes(1);
      wrapper.instance().handleKeyDown(createKeyDownEvent(13));
      expect(onToggle).toHaveBeenCalledTimes(2);
    });
    it('should be able to prevent toggle on click or keydown', () => {
      const onToggle = event => event.preventDefault();
      const wrapper = createWrapper({ onToggle });
      const titleWrapper = wrapper.find('[data-testid="accordion-item--title-wrapper"]').at(0);
      titleWrapper.simulate('click');
      expect(getDisplayState(wrapper)).toBe(false);
      wrapper.instance().handleKeyDown(createKeyDownEvent(13));
      wrapper.update();
      expect(getDisplayState(wrapper)).toBe(false);
    });
    it('should not fire onToggle if `disabled`', () => {
      const onToggle = jest.fn();
      const wrapper = createWrapper({ onToggle, disabled: true });
      const titleWrapper = wrapper.find('[data-testid="accordion-item--title-wrapper"]').at(0);
      titleWrapper.simulate('click');
      expect(getDisplayState(wrapper)).toBe(false);
      wrapper.instance().handleKeyDown(createKeyDownEvent(13));
      wrapper.update();
      expect(getDisplayState(wrapper)).toBe(false);
      expect(onToggle).toHaveBeenCalledTimes(0);
    });
  });
  describe('controlled behaviour', () => {
    it('should render closed with `open=false`', () => {
      const wrapper = createWrapper({ open: false });
      expect(getDisplayState(wrapper)).toBeFalsy();
    });
    it('should render open with `open=true`', () => {
      const wrapper = createWrapper({ open: true });
      expect(getDisplayState(wrapper)).toBe(true);
    });
    it('should fire `onToggle` event on click or keydown', () => {
      const onToggle = jest.fn();
      const wrapper = createWrapper({ onToggle, open: false });
      const titleWrapper = wrapper.find('[data-testid="accordion-item--title-wrapper"]').at(0);
      titleWrapper.simulate('click');
      expect(onToggle).toHaveBeenCalledTimes(1);
      wrapper.instance().handleKeyDown(createKeyDownEvent(13));
      expect(onToggle).toHaveBeenCalledTimes(2);
    });
    it('should not fire onToggle if `disabled`', () => {
      const onToggle = jest.fn();
      const wrapper = createWrapper({ onToggle, disabled: true, open: false });
      const titleWrapper = wrapper.find('[data-testid="accordion-item--title-wrapper"]').at(0);
      titleWrapper.simulate('click');
      expect(getDisplayState(wrapper)).toBe(false);
      wrapper.instance().handleKeyDown(createKeyDownEvent(13));
      wrapper.update();
      expect(getDisplayState(wrapper)).toBe(false);
      expect(onToggle).toHaveBeenCalledTimes(0);
    });
    it('should not change display state until a new prop value is passed', () => {
      const wrapper = createWrapper({ open: false });
      const titleWrapper = wrapper.find('[data-testid="accordion-item--title-wrapper"]').at(0);
      titleWrapper.simulate('click');
      expect(getDisplayState(wrapper)).toBe(false);
      wrapper.instance().handleKeyDown(createKeyDownEvent(13));
      wrapper.update();
      expect(getDisplayState(wrapper)).toBe(false);
      wrapper.setProps({ open: true });
      expect(getDisplayState(wrapper)).toBe(true);
    });
  });
});
