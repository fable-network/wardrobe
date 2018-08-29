/* eslint no-console: 0 */
const fs = require('fs');
const colors = require('colors');

const COMPONENTS_PATH = './src/components';

const isDirectory = name => fs.lstatSync(`${COMPONENTS_PATH}/${name}`).isDirectory();
// Place any folders inside `/src/compoentns' you want to be excluded from test generation here.
// e.g const excludedFolders = ['Badge']; will exclude the Badge component.
const excludedFolders = [];
const notExcluded = name => excludedFolders.indexOf(name) === -1;
const componentNames = fs.readdirSync(COMPONENTS_PATH).map(name => name)
  .filter(isDirectory)
  .filter(notExcluded);

const boilerPlate = `/* eslint-disable */
// This file was automatically generated
import React from 'react';
import { shallow } from 'enzyme';
import ~COMPONENT_NAME~ from './~COMPONENT_NAME~';
~OPTIONAL_IMPORTS~
describe('~COMPONENT_NAME~ Component', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
    ~YIELD~
    });
  });
});
`;

const logInfo = (message) => {
  console.log(colors.blue(message));
};

const logWarning = (message) => {
  console.log(colors.yellow(message));
};

const logError = (message) => {
  console.log(colors.red(message));
};

const writeTests = (tests) => {
  tests.forEach(test => {
    const path = `${COMPONENTS_PATH}/${test.name}/${test.name}_snapshot.spec.js`;
    fs.writeFile(path, test.code, (err) => {
      if (err) {
        logError(`Error writing file ${test.name}`);
        throw err;
      }
      logInfo(`Writing file to src/component/${test.name}/${test.name}_snapshot.spec.js`);
    });
  });
};

const finishedGeneration = (progress) =>
  Object.keys(progress).filter(key => progress[key] === false).length === 0;

const cleanAndGetImport = (componentName) => {
  if (componentName.indexOf('.') > -1) {
    return '';
  }
  const cleanComponent = componentName
    .replace(/</g, '')
    .replace(/>/g, '')
    .replace(/\s/g, '');

  return `import ${cleanComponent} from '../${cleanComponent}'`;
};

const injectSnapshotCode = (code, componentName) => {
  const otherComponentRegexString = `(?!<${componentName}( |>))<([A-Z].+?)( |>)`;
  const otherComponentRegex = new RegExp(otherComponentRegexString, 'g');
  const otherComponents = code.match(otherComponentRegex);
  let optionalImports = [];
  if (otherComponents && otherComponents.length) {
    optionalImports = otherComponents.map(cleanAndGetImport)
      .filter((elem, pos, arr) => arr.indexOf(elem) === pos);
  }
  return boilerPlate
    .replace('~YIELD~', code)
    .replace(/~COMPONENT_NAME~/g, componentName)
    .replace('~OPTIONAL_IMPORTS~', optionalImports.join('\n'));
};

const tabWidth = '  ';
// removes the extra characters from the matched strings (jsx & ```).
const cleanComponentCode = (code) =>
  code.map(component =>
    component
      .replace(/```/g, '') // remove all occurences of the string "```".
      .replace(/jsx/g, '') // remove all occurences of the string "jsx".
      .replace(/\n/g, `\n${tabWidth.repeat(4)}`)); // indent the component by 4 tabs (8 spaces)

const readMarkdownFile = (fileName, callBack, errorCallBack) => {
  fs.readFile(`./src/components/${fileName}/${fileName}.md`, (err, out) => {
    if (err) {
      logWarning(`Could not find markdown file for ${fileName}`);
      errorCallBack();
    } else {
      const file = out.toString();
      callBack(file);
    }
  });
};

const getMatchingComponents = (file, componentName) => {
  // To check which components will match the regex use this link https://regex101.com/r/7BlXLf/2
  // and replace 'Badge' with your component name.
  const regexString = `\`\`\`jsx\\n<${componentName}[\\s\\S]+?(\\/>|<\\/${componentName}>)`;
  // Result regex is ```jsx\n<Button[\s\S]+?(\/>|<\/Button>)
  // ```jsx\n (starts matching when it finds a code block that begins with this string)
  // <${componentName} (Ensures that the string begins with the component we are currently on)
  // [\s\S]+? (matches any white space character as few times as possible)
  // (\/>|<\/${componentName}>) untill it reaches "/>" or "</ComponentName>"

  const regex = new RegExp(regexString, 'g');
  const matches = file.match(regex);
  if (!matches) {
    return null;
  }
  const components = cleanComponentCode(matches);

  return components;
};

const getSnapshotCode = (component, index) => `
      const wrapper${index + 1} = shallow(${component}
      );
      expect(wrapper${index + 1}).toMatchSnapshot();
`;

const generateTests = () => {
  const tests = [];
  const progress = componentNames.reduce((acc, name) => {
    acc[name] = false;
    return acc;
  }, {});
  componentNames.forEach(name => {
    readMarkdownFile(name, (file) => {
      const components = getMatchingComponents(file, name);
      if (components && components.length) {
        const snapshotCode = components.map(getSnapshotCode).join('');
        const result = injectSnapshotCode(snapshotCode, name);
        tests.push({ name, code: result });
      } else {
        logWarning(`No matching components found for ${name}`);
      }

      progress[name] = true;
      if (finishedGeneration(progress)) {
        writeTests(tests);
      }
    },
    () => {
      // error callback
      progress[name] = true;
      if (finishedGeneration(progress)) {
        writeTests(tests);
      }
    });
  });
};

generateTests();
