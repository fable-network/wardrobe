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

Link button:

```jsx
<Button appearance="link">Push Me</Button>
```

Small link button:

```jsx
<Button appearance="link" size="small">
  Push Me
</Button>
```

Disabled link button:

```jsx
<Button appearance="link" disabled>
  Don't Push Me
</Button>
```

Multiline button:

```jsx
<div>
  <Button>
    Push Me<br />Touch me
  </Button>
</div>
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
    <Button>
      Push Me<br />Touch me
    </Button>
  </Wrapper>
</Grid>;
```

You can also render Button as a given HTML tag, e.g. if you want it to look like a button but wrap it with a react-router's `Link` component:

```jsx
<Button appearance="primary" renderAs="span">
  I'm not a button
</Button>
```
