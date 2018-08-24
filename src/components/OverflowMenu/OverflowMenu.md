Basic usage:
```jsx
<OverflowMenu>
  <OverflowMenu.Item onClick={() => alert("this.edit()")}>
    Edit
  </OverflowMenu.Item>
  <OverflowMenu.Item onClick={() => alert("this.delete()")}>
    Delete
  </OverflowMenu.Item>
</OverflowMenu>
```

Different position:
```jsx
<OverflowMenu position="left">
  <OverflowMenu.Item>
    Edit
  </OverflowMenu.Item>
  <OverflowMenu.Item>
    Delete
  </OverflowMenu.Item>
</OverflowMenu>
```

Change appearance (`primary`)
```jsx
<OverflowMenu appearance="primary">
  <OverflowMenu.Item>
    Edit
  </OverflowMenu.Item>
  <OverflowMenu.Item>
    Delete
  </OverflowMenu.Item>
</OverflowMenu>
```

Change appearance (`secondary`)
```jsx
<OverflowMenu appearance="secondary">
  <OverflowMenu.Item>
    Edit
  </OverflowMenu.Item>
  <OverflowMenu.Item>
    Delete
  </OverflowMenu.Item>
</OverflowMenu>
```

Custom color (`red`):
```jsx
<OverflowMenu color='red'>
  <OverflowMenu.Item>
    Action 1
  </OverflowMenu.Item>
  <OverflowMenu.Item>
    Action 2
  </OverflowMenu.Item>
</OverflowMenu>
```

With custom **active** color
```jsx
<OverflowMenu activeColor="blue">
  <OverflowMenu.Item>
    Action 1
  </OverflowMenu.Item>
  <OverflowMenu.Item>
    Action 2
  </OverflowMenu.Item>
</OverflowMenu>
```

Open initially (with title):
```jsx
<OverflowMenu openByDefault={true}>
  <OverflowMenu.Title>Use the trigger to close me</OverflowMenu.Title>
  <OverflowMenu.Item>
    Action 1
  </OverflowMenu.Item>
  <OverflowMenu.Item>
    Action 2
  </OverflowMenu.Item>
</OverflowMenu>
```
