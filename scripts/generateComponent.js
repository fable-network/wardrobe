const fs = require('fs');

const COMPONENTS_PATH = './src/components';

const componentName = process.argv[process.argv.indexOf('--name') + 1];
const componentPath = `${COMPONENTS_PATH}/${componentName}`;

const ComponentBoilerplate = `import React from 'react';
import PropTypes from 'prop-types';
import './${componentName}.scss';

const ${componentName} = (props) => (

);

${componentName}.defaultProps = {};

${componentName}.propTypes = {};

export default ${componentName};
`;

const ScssBoilerplate = `//
// ${componentName}
//
@import '../../globals/scss/colors';
@import '../../globals/scss/typography';
@import '../../globals/scss/variables';
@import '../../globals/scss/import-once';

`;

// Create new folder.
fs.mkdirSync(componentPath);
// Create JS file.
fs.writeFileSync(`${componentPath}/${componentName}.js`, ComponentBoilerplate);

// Create index file.
fs.writeFileSync(`${componentPath}/index.js`, `export default from './${componentName}';`);

// Create scss file.
fs.writeFileSync(`${componentPath}/${componentName}.scss`, ScssBoilerplate);

// Create markdown file.
fs.writeFileSync(`${componentPath}/${componentName}.md`, '');

// Add export in src/components/index.js
fs.appendFile(`${COMPONENTS_PATH}/index.js`, `export ${componentName} from './${componentName}';\n`);

console.log(`Your component can be found in ${componentPath}`);
