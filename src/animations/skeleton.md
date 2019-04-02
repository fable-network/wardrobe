Layout loading animation.

```js
const styled = require('styled-components').default;
const skeleton = require('./skeleton').default;
const MyDemo = styled.div`
  background: ${p => p.theme.grey05};
  width: 200px;
  height: 200px;
  position: relative;
  &:before {
    content: '';
    animation: ${skeleton()} 2.5s ease-in-out infinite;
  }
`;
<MyDemo />;
```
