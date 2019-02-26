A column chart for a few data points. Example usage: delivery window distribution for an order.

```jsx
<ColumnChart
  title="Distribution of delivery"
  data={require('../fixtures/column-chart.js').default}
  caption={({ y }) => (y === 1 ? 'piece' : 'pieces')}
/>
```

With one data point:

```jsx
<ColumnChart
  title="Distribution of delivery"
  data={require('../fixtures/column-chart-one.js').default}
  caption={({ y }) => (y === 1 ? 'piece' : 'pieces')}
/>
```

With a lot of data points:

```jsx 
<ColumnChart
  title="Distribution of delivery"
  data={require('../fixtures/column-chart-many.js').default}
  caption={({ y }) => (y === 1 ? 'piece' : 'pieces')}
/>
```

(Morale: don't use it for a lot of data points)
