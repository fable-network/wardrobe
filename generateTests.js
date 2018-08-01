const fs = require('fs');
let tests = [];

const componentNames = [
  'Badge',
  'Button',
  'ColorSelector'
];

const boilerPlate = `
import React from 'react';
import { shallow } from 'enzyme';
import ~COMPONENT_NAME~ from './~COMPONENT_NAME~';

describe('~COMPONENT_NAME~ Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      ~YIELD~
    });
  });
});
`

const finishedGeneration = (progress) =>
  Object.keys(progress).filter(key => progress[key] === false).length === 0

const progress = componentNames.reduce((acc, name) => acc[name] = false,{});

componentNames.forEach(name => {
  fs.readFile(`./src/components/${name}/${name}.md`, (err, out) => {
    if (err) {
      throw (err);
    }
    const file = out.toString();
    const matches = file.match(/```jsx\n(<[A-Z0-9][\s\S]+?)\n```\n[\s\S]*?/g);
    const components = matches.map(match => match.replace(/```/g, '').replace(/jsx/g, ''));
    const snapshotCode = components.map((component, i) => (
      `
      const wrapper${i + 1} = shallow(${component.replace(/\n/g, '')});
      expect(wrapper${i + 1}).toMatchSnapshot();
      `
    )).join('');

    const result = boilerPlate.replace('~YIELD~', snapshotCode).replace(/~COMPONENT_NAME~/g, name);
    tests.push({ name: name, code: result });

    progress[name] = true;
    if (finishedGeneration(progress)) {
      writeTests(tests);
    }
  });
});

const writeTests = (tests) => {
  tests.forEach(test => {
    const path = `./src/components/${test.name}/${test.name}.spec.js`;
      fs.writeFile(path, test.code, (err) => {
      if (err) throw err;
      console.log(`Writing file to src/component/${test.name}/${test.name}.spec.js`);
    });
  })
}
