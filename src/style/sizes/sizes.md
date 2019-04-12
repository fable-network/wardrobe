Size variables are here to make sure we align with a grid (as in 8px-grid). All sizes are specified using `rem`s, so are scaled based on the body font-size.

```jsx noeditor
const theme = require('../../theme/sizes').default;
const Table = require('../../components/Table').default;
<Table>
  {Object.keys(theme).map(sizing => <Sizes name={sizing} value={theme[sizing]} key={sizing} />)}
</Table>;
```

### Remarks

Sizes are part of a theme. If you use a theme from the Wardrobe, you can access them via the theme object:

```js static
css`
  color: ${p => p.theme.paddingHorizontalSmall};
`;
```

If you need to take borders into account, you can do this:

```js static
css`
  padding-left: ${p => calc(${p.theme.paddingHorizontalSmall} - 1px)};
`;
```
