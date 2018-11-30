import tabbable from 'tabbable';

export const { isTabbable } = tabbable;

export function nextTabbable(container) {
  const elems = tabbable(container);
  if (!elems.length) return null;
  const activeElem = document.activeElement;
  const activeIndex = elems.findIndex(elem => elem === activeElem);
  if (activeIndex < 0 || activeIndex + 1 >= elems.length) {
    return elems[0];
  }
  return elems[activeIndex + 1];
}

export function prevTabbable(container) {
  const elems = tabbable(container);
  if (!elems.length) return null;
  const activeElem = document.activeElement;
  const activeIndex = elems.findIndex(elem => elem === activeElem);
  if (activeIndex <= 0) {
    return elems[0];
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
