const fs = require('fs');
const { join } = require('path');
const COMPONENTS_PATH = './src/components';

const isDirectory = name => fs.lstatSync(`${COMPONENTS_PATH}/${name}`).isDirectory();
// Place any folders inside `/src/compoentns' you want to be excluded from test generation here.
// e.g const excludedFolders = ['Badge']; will exclude the Badge component.
const excludedFolders = [];
const notExcluded = name => excludedFolders.indexOf(name) === -1;
const componentNames = fs.readdirSync(COMPONENTS_PATH).map(name => name)
  .filter(isDirectory)
  .filter(notExcluded);

const boilerPlate = `// This file was automatically generated
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

const writeTests = (tests) => {
  tests.forEach(test => {
    const path = `${COMPONENTS_PATH}/${test.name}/${test.name}.spec.js`;
      fs.writeFile(path, test.code, (err) => {
      if (err) throw err;
      console.log(`Writing file to src/component/${test.name}/${test.name}.spec.js`);
    });
  })
}

const finishedGeneration = (progress) =>
  Object.keys(progress).filter(key => progress[key] === false).length === 0;

const injectSnapshotCode = (code, componentName) =>
  boilerPlate.replace('~YIELD~', code).replace(/~COMPONENT_NAME~/g, componentName);

// removes the extra characters from the matched strings (jsx & ```).
const cleanComponentCode = (code) =>
  code.map(component => component.replace(/```/g, '').replace(/jsx/g, ''));

const readMarkdownFile = (fileName, callBack) => {
  fs.readFile(`./src/components/${fileName}/${fileName}.md`, (err, out) => {
    if (err) {
      throw (err);
    } else {
      const file = out.toString();
      callBack(file);
    }
  });
};

const getMatchingComponents = (file, componentName) => {
  // To check which components will match the regex use this link https://regex101.com/r/7BlXLf/2
  // and replace 'Badge' with your component name.
  const regexString =  `\`\`\`jsx\\n<${componentName}[\\s\\S]+?(\\/>|<\\/${componentName}>)`;
  // ```jsx\n (starts matching when it finds a code block that begins with this string)
  // <${componentName} (Ensures that the string begins with the component we are currently on)
  // [\s\S]+? (matches any white space character as few times as possible)
  // (\/>|<\/${componentName}>) untill it reaches "/>" or "</ComponentName>"

  const regex = new RegExp(regexString, 'g')
  const matches = file.match(regex);
  const components = cleanComponentCode(matches);

  return components;
}

const generateTests = () => {
  const tests = [];
  const progress = componentNames.reduce((acc, name) => acc[name] = false,{});
  componentNames.forEach(name => {
    readMarkdownFile(name, (file) => {
      const components = getMatchingComponents(file, name);
      const snapshotCode = components.map((component, i) => (
        `
      const wrapper${i + 1} = shallow(${component.replace(/\n/g, '')});
      expect(wrapper${i + 1}).toMatchSnapshot();
        `
      )).join('');

      const result = injectSnapshotCode(snapshotCode, name);
      tests.push({ name: name, code: result });

      progress[name] = true;
      if (finishedGeneration(progress)) {
        writeTests(tests);
      }
    });
  });
}

generateTests();
