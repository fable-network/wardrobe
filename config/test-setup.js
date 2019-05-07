require('jest-enzyme');
require('jest-styled-components');
const React = require('react');
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
const { createSerializer } = require('enzyme-to-json');
const { JSDOM } = require('jsdom');
const { ThemeProvider } = require('styled-components');
const defaultTheme = require('../src/theme/default').default;

Enzyme.configure({ adapter: new EnzymeAdapter() });

global.window = new JSDOM().window;
global.document = global.window.document;
global.mount = component =>
  Enzyme.mount(<ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>);

expect.addSnapshotSerializer(
  createSerializer({
    mode: 'deep',
    map: node => {
      const res = filterProps(['theme'], node);
      return res;
    },
  })
);

function filterProps(propNames, node) {
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
