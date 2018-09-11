/* eslint no-console: 0 */
const fs = require('fs');
const { logInfo, logWarning, logError, isComponentDirectory } = require('./scriptUtils');

const COMPONENTS_PATH = './src/components';

/**
 * Creates a part of regex for an optional custom require, which can be used to substitute
 * an actual component with a special styleguide component for demo purposes.
 * E.g. you don't want to use a plain actual modal, because it will block the whole Styleguide UI.
 *
 * The resulting part of regex, given componentName is "Button" and this require is optional is:
 *
 * (const\s+ButtonStyleguide\s+=\srequire.*;)?
 *
 * Where:
 * ()? - the whole thing is optional,
 * const - "const" literally,
 * \s+ - whitespace characters,
 * ButtonStyleguide - name of the custom component used in the story,
 * require - "require" literally,
 * .*; - any characters, ending with a ";".
 *
 * An example of the string falling under this regex is:
 *
 * const ButtonStyleguide = require('./ButtonStyleguide').default;
 */
const getCustomRequireRegex = (componentName, optional = false) =>
  `(const\\s+${componentName}Styleguide\\s+=\\s+require.*;\\n)${optional ? '?' : ''}`;

// Place any folders inside `/src/compoentns' you want to be excluded from test generation here.
// e.g const excludedFolders = ['Badge']; will exclude the Badge component.
const excludedFolders = [];
const notExcluded = name => excludedFolders.indexOf(name) === -1;
const componentNames = fs
  .readdirSync(COMPONENTS_PATH)
  .map(name => name)
  .filter(isComponentDirectory)
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

const writeTests = tests => {
  tests.forEach(test => {
    const path = `${COMPONENTS_PATH}/${test.name}/${test.name}_snapshot.spec.js`;
    fs.writeFile(path, test.code, err => {
      if (err) {
        logError(`Error writing file ${test.name}`);
        throw err;
      }
      logInfo(`Writing file to src/component/${test.name}/${test.name}_snapshot.spec.js`);
    });
  });
};

const finishedGeneration = progress =>
  Object.keys(progress).filter(key => progress[key] === false).length === 0;

const cleanAndGetImport = componentName => {
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
    optionalImports = otherComponents
      .map(cleanAndGetImport)
      .filter((elem, pos, arr) => arr.indexOf(elem) === pos);
  }
  return boilerPlate
    .replace('~YIELD~', code)
    .replace(/~COMPONENT_NAME~/g, componentName)
    .replace('~OPTIONAL_IMPORTS~', optionalImports.join('\n'));
};

const tabWidth = '  ';
// removes the extra characters from the matched strings (jsx & ```).
const cleanComponentCode = (code, componentName) =>
  code.map(component =>
    component
      .replace(new RegExp(getCustomRequireRegex(componentName), 'g'), '')
      .replace(new RegExp(`${componentName}Styleguide`, 'g'), componentName) // replace custom styleguide component name to a normal component name
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
  const customRequire = getCustomRequireRegex(componentName, true);
  const regexString = `\`\`\`jsx\\n${customRequire}<${componentName}(Styleguide)?[\\s\\S]+?(\\/>|<\\/${componentName}(Styleguide)?>)`;
  // Result regex is:
  //
  // ```jsx\n(const\\s+ButtonStyleguide\\s+=\\srequire.*;\n)?
  // <Button(Styleguide)?[\s\S]+?(\/>|<\/Button(Styleguide)?>)
  //
  // Where:
  // ```jsx\n (starts matching when it finds a code block that begins with this string)
  // (const\\s+ButtonStyleguide\\s+=\\srequire.*;\n)? (optional custom component require,
  //    e.g. see Modal.md)
  // <${componentName} (Ensures that the string begins with the component we are currently on)
  // [\s\S]+? (matches any white space character as few times as possible)
  // (\/>|<\/${componentName}>) until it reaches "/>" or "</ComponentName>"

  const regex = new RegExp(regexString, 'g');
  const matches = file.match(regex);
  if (!matches) {
    return null;
  }
  const components = cleanComponentCode(matches, componentName);

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
    readMarkdownFile(
      name,
      file => {
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
      }
    );
  });
};

generateTests();
