Empty:

```jsx
<Input type="text" placeholder="Empty state" value="" />
```

Filled:

```jsx
<Input type="text" value="Some text" />
```

Disabled:

```jsx
<Input type="text" disabled placeholder="This input is disabled" />
```

Invalid:

```jsx
<Input
  type="text"
  placeholder="You could type something here"
  value="invalid value"
  invalid={true}
/>
```

Editable:

```jsx
<Input
  type="text"
  placeholder="You could type something here"
/>
```
