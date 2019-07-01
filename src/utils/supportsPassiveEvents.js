// eslint-disable-next-line
let supportsPassive = false;

try {
  const opts = Object.defineProperty({}, 'passive', {
    // eslint-disable-next-line
    get: () => {
      supportsPassive = true;
    },
  });
  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {
  // Do nothing
}

export default supportsPassive;
