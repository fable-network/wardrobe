/**
 * A function to filter out given props when serializing your components with
 * `enzyme-to-json` serializer.
 *
 * Can be useful when you have a `styled-components`' `theme` and don't want your
 * snapshots to be updated every time you change the theme object. E.g.:
 *
 * ```
 * import 'jest-enzyme';
 * import { createSerializer } from 'enzyme-to-json';

 * expect.addSnapshotSerializer(
 *   createSerializer({
 *     mode: 'deep',
 *     map: (node) => {
 *       const res = filterProps(['theme'], node);
 *       return res;
 *     },
 *   })
 * );
 * ```
 */

export default function filterProps(propNames, node) {
  if (typeof node === 'string' || typeof node === 'number' || typeof node === 'boolean') {
    return node;
  }
  if (!node) return node;
  const res = { ...node };
  if (node.node) {
    res.node = filterProps(propNames, node.node);
  }
  if (node.props) {
    res.props = Object.keys(node.props).reduce((acc, key) => {
      if (!propNames.includes(key)) {
        acc[key] = node.props[key];
      }
      return acc;
    }, {});
  }
  if ('children' in node) {
    if (Array.isArray(node.children)) {
      res.children = node.children.map(childNode => filterProps(propNames, childNode));
    } else if (typeof node.children === 'string') {
      res.children = node.children;
    } else {
      res.children = filterProps(propNames, node.children);
    }
  }
  return res;
}
