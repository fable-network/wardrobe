A clock-wise 360deg rotation.

```js
const styled = require('styled-components').default;
const fullCircleRotate = require('./fullCircleRotate').default;
const MyDemo = styled.div`
  width: 100px;
  height: 100px;
  margin: 50px;
  background-color: ${p => p.theme.primary};
  animation: ${fullCircleRotate()} 2s ease-in-out infinite;
`;
<MyDemo />
```
