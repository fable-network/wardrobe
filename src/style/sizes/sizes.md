Size variables are here to make sure we align with a grid (as in 8px-grid). Here we provide to examples
of using size variables, but possible use cases are, of course, not restricted to this examples.

### As element sizes

```jsx noeditor
const theme = require('../../theme/sizes').default;
<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
  {Object.keys(theme).map(size => <Sizes name={size} value={theme[size]} key={size} />)}
</div>;
```

### As space between elements (margins)

```jsx noeditor
const theme = require('../../theme/sizes').default;
<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
  {Object.keys(theme).map(size => <Sizes.Margin name={size} value={theme[size]} key={size} />)}
</div>;
```

### As space inside elements (paddings)

```jsx noeditor
const theme = require('../../theme/sizes').default;
<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
  {Object.keys(theme).map(size => <Sizes.Padding name={size} value={theme[size]} key={size} />)}
</div>;
```

### Remarks

Sizes are part of a theme. If you use a theme from the Wardrobe, you can access them via the theme object:

```js static
`color: ${p => p.theme.s4};`
```
