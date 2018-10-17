Primary button:

```jsx
<Button appearance="primary">Push Me</Button>
```

Disabled primary button:

```jsx
<Button appearance="primary" disabled>
  Don't Push Me
</Button>
```

Secondary button:

```jsx
<Button appearance="secondary">Push Me</Button>
```

Disabled secondary button:

```jsx
<Button appearance="secondary" disabled>
  Don't Push Me
</Button>
```

Small button:

```jsx
<Button size="small">Push Me</Button>
```

On a grid:

```jsx
const Grid = require('../../styleguide/Grid.js').default;
const styled = require('styled-components').default;
const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  > * + * {
    margin-left: 24px;
  }
`;
const ButtonCustom = styled(Button)`
  font-size: 2rem;
`;
<Grid>
  <Wrapper>
    <Button>Normal</Button>
    <Button size="small">Small</Button>
    <ButtonCustom>Custom</ButtonCustom>
  </Wrapper>
</Grid>;
```
