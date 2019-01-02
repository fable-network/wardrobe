A simple opacity fade in.

```js
const styled = require('styled-components').default;
const fadeIn = require('./fadeIn').default;
const MyDemo = styled.div`
  width: 100px;
  height: 100px;
  margin: 50px;
  background-color: ${p => p.theme.primary};
  animation: ${fadeIn()} 2s ease-in-out infinite;
`;
<MyDemo />
```
