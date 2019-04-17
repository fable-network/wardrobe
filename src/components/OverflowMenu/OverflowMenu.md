Basic usage `size="small"` (default):

```jsx
<OverflowMenu>
  <OverflowMenu.Item onClick={() => alert('this.edit()')}>Edit</OverflowMenu.Item>
  <OverflowMenu.Item onClick={() => alert('this.delete()')}>Delete</OverflowMenu.Item>
</OverflowMenu>
```

`size="medium"`:

```jsx
<OverflowMenu size="medium">
  <OverflowMenu.Item onClick={() => alert('this.edit()')}>Edit</OverflowMenu.Item>
  <OverflowMenu.Item onClick={() => alert('this.delete()')}>Delete</OverflowMenu.Item>
</OverflowMenu>
```

`size="large"`:

```jsx
<OverflowMenu size="large">
  <OverflowMenu.Item onClick={() => alert('this.edit()')}>Edit</OverflowMenu.Item>
  <OverflowMenu.Item onClick={() => alert('this.delete()')}>Delete</OverflowMenu.Item>
</OverflowMenu>
```

Persist the menu after a click inside:

```jsx
<OverflowMenu persist>
  <p>Some sample text</p>
</OverflowMenu>
```

Different position:

```jsx
<OverflowMenu position="left">
  <OverflowMenu.Item>Edit</OverflowMenu.Item>
  <OverflowMenu.Item>Delete</OverflowMenu.Item>
</OverflowMenu>
```

Change appearance (`primary`)

```jsx
<OverflowMenu appearance="primary">
  <OverflowMenu.Item>Edit</OverflowMenu.Item>
  <OverflowMenu.Item>Delete</OverflowMenu.Item>
</OverflowMenu>
```

Change appearance (`danger`)

```jsx
<OverflowMenu appearance="danger">
  <OverflowMenu.Item>Edit</OverflowMenu.Item>
  <OverflowMenu.Item>Delete</OverflowMenu.Item>
</OverflowMenu>
```

On a different background:

```jsx
const styled = require('styled-components').default;
const Wrapper = styled.div`
  background-color: ${p => p.theme.pageBackground};
  padding: 2rem;
`;
<Wrapper>
  <OverflowMenu>
    <OverflowMenu.Item>Edit</OverflowMenu.Item>
    <OverflowMenu.Item>Delete</OverflowMenu.Item>
  </OverflowMenu>
</Wrapper>;
```

Custom color (`red`):

```jsx
<OverflowMenu color="red">
  <OverflowMenu.Item>Action 1</OverflowMenu.Item>
  <OverflowMenu.Item>Action 2</OverflowMenu.Item>
</OverflowMenu>
```

With custom **active** color

```jsx
<OverflowMenu activeColor="blue">
  <OverflowMenu.Item>Action 1</OverflowMenu.Item>
  <OverflowMenu.Item>Action 2</OverflowMenu.Item>
</OverflowMenu>
```

Controlled by `open` prop (`true`).

```jsx
<OverflowMenu open={true}>
  <OverflowMenu.Title>You can't close me</OverflowMenu.Title>
  <OverflowMenu.Item>Action 1</OverflowMenu.Item>
  <OverflowMenu.Item>Action 2</OverflowMenu.Item>
</OverflowMenu>
```
