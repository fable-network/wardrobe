_DEPRECATED_ This component is deprecated, please use [Box](/#/Layout?id=box) instead.
A component to display a number of blocks stacked upon each other.

```jsx
const styled = require('styled-components').default;
const Sample = styled.div`
  height: 2rem;
  width: 100%;
  background: grey;
`;
<Stack>
  <Sample />
  <Sample />
  <Sample />
</Stack>;
```

Can be horizontal:

```jsx
const styled = require('styled-components').default;
const Sample = styled.div`
  height: 2rem;
  width: 3rem;
  background: grey;
`;
<Stack direction="horizontal" size="large">
  <Sample />
  <Sample />
  <Sample />
</Stack>;
```
