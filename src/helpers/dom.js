import tabbable from 'tabbable';

export const { isTabbable } = tabbable;

export function nextTabbable(container) {
  const elems = tabbable(container);
  if (!elems.length) return null;
  const activeIndex = elems.indexOf(document.activeElement);
  if (activeIndex < 0 || activeIndex + 1 >= elems.length) {
    return elems[0];
  }
  return elems[activeIndex + 1];
}

export function prevTabbable(container) {
  const elems = tabbable(container);
  if (!elems.length) return null;
  const activeIndex = elems.indexOf(document.activeElement);
  if (activeIndex <= 0) {
    return null;
  }
  return elems[activeIndex - 1];
}

export function findSelfOrParentInContainer(container, elem) {
  if (!elem) return null;
  let currentElem = elem;
  while (currentElem && currentElem.parentElement !== container) {
    currentElem = currentElem.parentElement;
  }
  return currentElem;
}

export function dispatchKeyboardEvent(type, element, keyCode) {
  if (typeof window.KeyboardEvent === 'function') {
    const event = new window.KeyboardEvent(type, {
      bubbles: true,
      cancellable: true,
      view: window,
      keyCode,
    });
    element.dispatchEvent(event);
  } else if ('createEvent' in document) {
    try {
      const event = document.createEvent('HTMLEvents');
      event.keyCode = keyCode;
      event.initEvent(type, true, true);
      element.dispatchEvent(event);
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
  return true;
}
