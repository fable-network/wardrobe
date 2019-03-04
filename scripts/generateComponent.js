/* eslint no-console: 0 */
const fs = require('fs');
const { logInfo, logError, isComponentDirectory } = require('./scriptUtils');

const COMPONENTS_PATH = './src/components';
const currentComponents = fs
  .readdirSync(COMPONENTS_PATH)
  .map(name => name)
  .filter(isComponentDirectory(COMPONENTS_PATH));

const componentName = process.argv[process.argv.indexOf('--name') + 1];
if (currentComponents.indexOf(componentName) > -1) {
  logError(`A component with the name "${componentName}" already exists!`);
  return;
}

const componentPath = `${COMPONENTS_PATH}/${componentName}`;
const stylesBoilterplate = "import styled from 'styled-components';";

const ComponentBoilerplate = `import React from 'react';
import PropTypes from 'prop-types';
${stylesBoilterplate}

const Wrapper = styled.span\`\`;

const ${componentName} = ({ name }) => (<Wrapper>Hello, I am {name}</Wrapper>);

${componentName}.defaultProps = {
  name: '${componentName}',
};

${componentName}.propTypes = {
  // Please remove unused prop types
  name: PropTypes.string,
};

export default ${componentName};
`;

const ComponentDocumentationBoilerplate = `
${componentName} component:
\`\`\`jsx
<${componentName} /> 
\`\`\`
`;

// Create new folder.
fs.mkdirSync(componentPath);
// Create JS file.
fs.writeFileSync(`${componentPath}/${componentName}.js`, ComponentBoilerplate);

// Create index file.
fs.writeFileSync(`${componentPath}/index.js`, `export default from './${componentName}';\n`);

// Create markdown file.
fs.writeFileSync(`${componentPath}/${componentName}.md`, ComponentDocumentationBoilerplate);

// Add export in src/components/index.js
fs.appendFileSync(
  './src/index.js',
  `export ${componentName} from './components/${componentName}';\n`
);

logInfo(`Your component can be found in ${componentPath}`);
