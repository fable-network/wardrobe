# Wardrobe

FashionTrade Component Library.

[Components styleguide](http://wardrobe.fashiontrade.com)


## How to use

`yarn add @fashiontrade/wardrobe styled-components@3`

Wrap you app in a `ThemeProvider` and pass `Theme` object imported from `@fashiontrade/wardrobe`

```js
import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components';
import { Theme } from '@fashiontrade/wardrobe';
import App from './App';

render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
```

You can now use the wardrobe components:

```js
import { Dialog } from '@fashiontrade/wardrobe';

const MyComponent = () => (
  <Dialog size="normal" open={true}>
    <Dialog.Header>Please select your profile</Dialog.Header>
    <Dialog.Body>Body text goes here</Dialog.Body>
  </Dialog>
);

export default MyComponent;
```

## How to run
* `yarn install`
* `yarn start` (Uses [Styleguidist](https://github.com/styleguidist/react-styleguidist))

## Workflow & conventions
#### Creating a new component:
**Using the script**

`node scripts/generateComponent.js --name <ComponentName>`

OR

`yarn generate-component -- --name <ComponentName>`

This runs the script found in [scripts/generateComponent.js](scripts/generateComponent.js). which will create all the files listed below.

1. Create a folder with component name in `src/components` following the current naming conventions.
2. Create the component JS file with the same name as the folder name `.js`.
3. Create the component styles file with the same name as the folder `.scss` (following [BEM](http://getbem.com/) conventions).
4. Create the markdown file with the same name as the folder `.md`.
5. Inside the markdown file (Built with [Styleguidist](https://github.com/styleguidist/react-styleguidist))) create all possible states of the component, to illustrate how it is used and how it looks with different prop values.
6. Finally export your component in `src/components/index.js` to be bundled in the index file.

#### Generating Tests:
After you have created your component and ensured that it looks good in the styleguide. run the follwing command
```sh
yarn generate-tests
```
This runs the script found in [scripts/generateTests.js](scripts/generateTests.js). which will generate snapshots tests found in `src/components/ComponentName/ComponentName.spec.js`. **with some conditions:**

**Only single components in a code block will be captured (that means that siblings will be ignored).**

Example (in your markdown file): 
```jsx
<MyComponent foo="bar" /> // will be captured and tests generated.
<MyComponent baz="cuz" /> // will be ignored
```
**If the component is a child of another element it will also be ignored.**

Example:
```jsx
<div>
  <MyComponent foo="bar" /> // Entire block will be ignored
</div>
```

**If the component is not inside a code block wrapper, it will be ignored**

Example:
````jsx
// inside a code block
```jsx
<MyComponent /> // will be captured and tests generated.
```

// outside a code block
<MyComponent /> // will be ignored
````

**Also you can use a special version of your component for Styleguide this way:**

Example:
```jsx
// with custom require
const MyComponentStyleguide = require('./MyComponentStyleguide').default;
<MyComponentStyleguide /> // will work
```

The name of the variable with required component should be `<ComponenName>Styleguide`.

You may need this feature in case your component, when used directly, breaks of blocks 
the Styleguide, e.g. Modal component.

## Release process
* Update the package version in the package.json file.
* Open the changelog and update everything from the unreleased section to the new release version and date.
* Commit your changes to master.
* Go to the releases tab on Github and draft a new release.
* Use the same tag version you added in the changelog (e.g 1.0.0).
* Release title should be the tag prefixed with 'v' (e.g v1.0.0).
* Copy what was Added/Changed/Fixed from the changelog and paste it in the description of the release.
* Publish the release.
* Go back to your terminal, run `git pull` and checkout the release tag (`git checkout 1.0.0`).
* Publish the package to NPM registry: `npm publish`.

## License

Apache 2.0
