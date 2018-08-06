# Wardrobe

FashionTrade Component Library.


## How to run
* `npm install`
* `npm start` (Uses [Styleguidist](https://github.com/styleguidist/react-styleguidist))

## Workflow & conventions
#### Creating a new component:
1. Create a folder with component name in `src/components` following the current naming conventions.
2. Create the component JS file with the same name as the folder name `.js`.
3. Create the component styles file with the same name as the folder `.scss` (following [BEM](http://getbem.com/) conventions).
4. Create the markdown file with the same name as the folder `.md`.
5. Inside the markdown file (Built with [Styleguidist](https://github.com/styleguidist/react-styleguidist))) create all possible states of the component, to illustrate how it is used and how it looks with different prop values.
6. Finally export your component in `src/index.js` to be accessible by other apps.

#### Generating Tests:
After you have created your component and ensured that it looks good in the styleguide. run the follwing command
```sh
npm run generate-tests
```
This runs the script found in [generateTests.js](generateTests.js). which will generate snapshots tests found in `src/components/ComponentName/ComponentName.spec.js`. **with some conditions:**

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
