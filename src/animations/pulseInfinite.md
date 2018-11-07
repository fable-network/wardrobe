Infinite pulsation.

```js
const styled = require('styled-components').default;
const pulseInfinite = require('./pulseInfinite').default;
const MyPulseDiv = styled.div`
  width: 100px;
  height: 100px;
  margin: 50px;
  background-color: ${p => p.theme.primary};
  animation: ${pulseInfinite()} 2s ease-in-out infinite;
`;
<MyPulseDiv />
```
