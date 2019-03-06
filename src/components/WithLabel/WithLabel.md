WithLabel component to render a given value with a label on top:

```jsx
<WithLabel label="Total WSP">
  EUR <span style={{ textDecoration: 'line-through' }}>15,982.09</span>{' '}
  <span style={{ color: 'red' }}>12,345.67</span>
</WithLabel>
```

With not too much content:

```jsx
<WithLabel label="Pieces">0</WithLabel>
```

Can also be horizontal:

```jsx
<WithLabel label="RRP" direction="horizontal" style={{ width: '300px' }}>
  EUR 69.99
</WithLabel>
```
