```jsx noeditor
const theme = require('../../theme/colors').default;
<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
  {Object.keys(theme).map(color => <Colors name={color} value={theme[color]} key={color} />)}
</div>;
```

### Remarks

Colors are part of a theme. If you use a theme from the Wardrobe, you can access them via the theme object:

```css
color: ${p => p.theme.ravenBlack};
```
