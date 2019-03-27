A column chart for a few data points. Example usage: delivery window distribution for an order.

```jsx
<ColumnChart
  title="Distribution of delivery"
  subtitle="Total: 480 pieces"
  data={require('../fixtures/column-chart.js').default}
  caption={({ y }) => (y === 1 ? 'piece' : 'pieces')}
/>
```

With one data point:

```jsx
<ColumnChart
  title="Distribution of delivery"
  subtitle="Total: 42 pieces"
  data={require('../fixtures/column-chart-one.js').default}
  caption={({ y }) => (y === 1 ? 'piece' : 'pieces')}
/>
```

With a lot of data points and `allowUpdate` prop on:

```jsx 
<ColumnChart
  title="Distribution of delivery"
  subtitle="Total: 100500 pieces"
  data={require('../fixtures/column-chart-many.js').default}
  caption={({ y }) => (y === 1 ? 'piece' : 'pieces')}
  allowUpdate
/>
```

(Morale: don't use it for a lot of data points)
