/**
 * # List unused components
 *
 * A script to list all unused components in a JSON format. Save it to file or use `jq` to further
 * process the result (e.g. manually remove unused files).
 *
 * The script is project specific, but can be easily made more universal.
 *
 * It works as follows:
 *
 * 1. Build a list of all considered files.
 * 2. Define a list of root components, which would define what is "used".
 * 3. Build a dependency tree between all files - the key is a file path and the value is a list of
 * it's dependencies.
 * 4. Recursively remove from the tree all used files.
 * 5. All the keys left in the tree are a list of unused files.
 *
 */

const path = require('path');
const fs = require('fs');

const { logInfo } = require('./scriptUtils.js');

const ROOT_DIR = path.join(__dirname, '../src');
// const COMPONENTS_DIR = path.join(ROOT_DIR, 'components');

const ALIAS = {
  // components: path.join(COMPONENTS_DIR, ''),
};

main();

/**
 * MAIN
 */

function main() {
  const allFiles = readdirRecursive(ROOT_DIR, isDirectoryIncluded);
  const root = [
    // add any root files here
    path.join(ROOT_DIR, 'index.js'),
  ];

  const depTree = buildDependencyTree(allFiles);
  const res = root.reduce((acc, rootPath) => removeUsed(acc, rootPath), depTree);

  logInfo(JSON.stringify(Object.keys(res), null, 2));
}

/**
 * Implementation details
 */

function isDirectoryIncluded(dirPath) {
  return dirPath === ROOT_DIR || dirPath.startsWith(path.join(ROOT_DIR, 'components'));
}

function buildDependencyTree(allFiles) {
  return allFiles.reduce((acc, filePath) => {
    const imports = getImports(filePath)
      .filter(isLocalImport)
      .map(resolvePath.bind(null, filePath));
    acc[filePath] = imports;
    return acc;
  }, {});
}

function removeUsed(depTree, rootPath) {
  // Using deep-first search to remove children before parents
  const imports = [
    ...(depTree[rootPath] || []),
    ...(depTree[`${rootPath}.js`] || []),
    ...(depTree[`${rootPath}/index.js`] || []),
  ];
  const tree = imports.reduce((acc, importPath) => removeUsed(acc, importPath), depTree);
  delete tree[rootPath];
  delete tree[`${rootPath}.js`];
  delete tree[`${rootPath}/index.js`];
  return tree;
}

function resolvePath(filePath, importPath) {
  const aliasKey = getLocalAlias(importPath);
  if (aliasKey) {
    return path.join(ALIAS[aliasKey], importPath.substr(aliasKey.length));
  }
  const dirPath = path.dirname(filePath);
  return path.join(dirPath, importPath);
}

function getImports(filePath) {
  const regex = /\s+from\s+'(.+)';/g;
  const content = fs.readFileSync(filePath);
  const imports = [];
  let res = regex.exec(content);
  while (res) {
    imports.push(res[1]);
    res = regex.exec(content);
  }
  return imports;
}

function readdirRecursive(dirPath, filter) {
  if (typeof filter === 'function') {
    if (!filter(dirPath)) return [];
  }
  const curFiles = fs.readdirSync(dirPath);
  return curFiles.reduce((acc, fileName) => {
    const filePath = path.join(dirPath, fileName);
    let res = acc;
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) res = [...res, ...readdirRecursive(filePath, filter)];
    else if (stats.isFile() && isComponentFile(fileName)) res = [...res, filePath];
    return res;
  }, []);
}

function isLocalImport(importPath) {
  return importPath.startsWith('.') || Boolean(getLocalAlias(importPath));
}

function getLocalAlias(importPath) {
  return Object.keys(ALIAS).find(key => importPath.startsWith(key));
}

function isComponentFile(filePath) {
  const regex = /.+\.js$/;
  const ignoreRegex = /(stories\.js|story\.js|\.specs?\.(js|snap))$/;
  return regex.test(filePath) && !ignoreRegex.test(filePath);
}
