import debounce from 'lodash.debounce';

const throttle = (func, wait) =>
  debounce(func, wait, {
    leading: true,
    maxWait: wait,
    trailing: true,
  });

export default throttle;
