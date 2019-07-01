/**
 * This can be used to freeze the redux state to make sure to not mutate it directly.
 * Do so only in DEV mode!
 *
 * E.g.:
 *
 * ```
 * function freezingRootReducer(state, action) {
 *  'strict mode';
 *
 *  const newState = deepFreeze(rootReducer(state, action));
 *  return newState;
 * }
 * ```
 */

export default function deepFreeze(obj) {
  Object.freeze(obj);

  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (
      Object.prototype.hasOwnProperty.call(obj, prop) &&
      obj[prop] !== null &&
      (typeof obj[prop] === 'object' || typeof obj[prop] === 'function') &&
      !Object.isFrozen(obj[prop])
    ) {
      deepFreeze(obj[prop]);
    }
  });

  return obj;
}
