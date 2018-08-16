
```jsx noeditor
const theme = require('../../theme/default').colors;
<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}>
  {Object.keys(theme).map(color => (
    <Colors name={color} value={theme[color]} />
  ))}  
</div>
```
