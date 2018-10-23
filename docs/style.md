You can use this default theme by importing it from the Wardrobe:

```js static
import { ThemeProvider } from 'styled-components';
import { Theme } from '@fashiontrade/wardrobe';

export default () => (
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>
);
```
