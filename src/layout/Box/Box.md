Box component has no UI and specifies paddings and spacing between child components.

Vertical (default) example:

```jsx
const styled = require('styled-components').default;
const Sample = styled.div`
  height: 2rem;
  width: 100%;
  background: grey;
`;
const BoxStyled = styled(Box)`
  background-color: #e0e0fa;
`;
<BoxStyled padding="L 0" paddingMobile="M M" stack="M" stackMobile="S">
  <Sample />
  <Sample />
  <Sample />
</BoxStyled>;
```

Horizontal example:

```jsx
const styled = require('styled-components').default;
const Sample = styled.div`
  height: 2rem;
  width: 2rem;
  background: grey;
`;
const BoxStyled = styled(Box)`
  background-color: #e0e0fa;
`;
<BoxStyled padding="S M" stack="M" direction="horizontal">
  <Sample />
  <Sample />
  <Sample />
</BoxStyled>;
```
