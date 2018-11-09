## Font

![](images/avenir-next.png)

The font stack we use on web is:

```css
font-family: 'Avenir Next', Arial, 'Helvetica Neue', Helvetica, sans-serif;
```

We use only `normal` and <strong>`strong`</strong> font styles.

Font sizes are based on the document's base font size (using `rem`s), which by default for us is `16px`. Therefore, when we define e.g. a small font size, it will always be the same as any other small type on the page. At the same time it is responsive, so that if user zooms in, every piece of text on the page will respect that (try pressing `Cmd + Plus` here).

## Typographic scale: Text

```jsx
const Table = require('../../components/Table').default;
const TypeSample = require('./typography.js').Typography;

<Table appearance="light" alternatingRowColors={false}>
  <TypeSample name="Small">
    Small type is used for...
  </TypeSample>
  <TypeSample name="Base">
    Base type is used for most of the...
  </TypeSample>
  <TypeSample name="Large">
    Large type is used in situations when...
  </TypeSample>
</Table>;
```

Headings and lists TBC.

## Typographic scale: Controls

```jsx
const Table = require('../../components/Table').default;
const ControlSample = require('./typography.js').ControlTypography;

<Table appearance="light" alternatingRowColors={false}>
  <ControlSample name="Small" />
  <ControlSample name="Base" />
  <ControlSample name="Large" />
</Table>;
```
