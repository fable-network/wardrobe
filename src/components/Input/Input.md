Empty:

```jsx
<Input type="text" placeholder="Empty state" value="" onChange={() => null} />
```

Filled:

```jsx
<Input type="text" value="Some text" onChange={() => null} />
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
  onChange={() => null}
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
