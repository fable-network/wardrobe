```jsx noeditor
const theme = require('../../theme/colors').default;
const usage = require('../../theme/colors').usage;
<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justtifyContent: 'space-between',
  }}
>
  {Object.keys(theme).map(color => (
    <Colors name={color} value={theme[color]} key={color} description={usage[theme[color]]} />
  ))}
</div>;
```

### Remarks

Colors are part of a theme. If you use a theme from the Wardrobe, you can access them via the theme object:

```js static
`color: ${p => p.theme.grey01};`;
```
