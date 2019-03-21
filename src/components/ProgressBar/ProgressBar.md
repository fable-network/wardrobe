Value is 0:

```jsx
<ProgressBar max={100} value={0} />
```

Value is 42:

```jsx
<ProgressBar max={100} value={42} />
```

Value is 100:

```jsx
<ProgressBar max={100} value={100} />
```

Different appearance:

```jsx
<ProgressBar max={100} value={42} appearance="warning" />
```

Hide the border:

```jsx
<div style={{ 'backgroundColor': 'lightgrey', padding: '8px' }}>
  <ProgressBar max={100} value={42} hideBorder={true} />
</div>
```
