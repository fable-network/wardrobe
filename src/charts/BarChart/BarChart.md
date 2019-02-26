A bar chart for many data points. Example usage: category mix, price points.

```jsx
<BarChart title="Category mix" data={require('../fixtures/bar-chart-category-mix.js').default} />
```

Even more data points and a custom tooltip format:

```jsx
<BarChart
  title="Category mix"
  data={require('../fixtures/bar-chart-category-mix-many.js').default}
  tooltip={({ y, percentage }) => `Quantity: ${y}<br>Percent: ${percentage.toFixed(0)}%`}
/>
```

Vertical bars (e.g. for Price points):

```jsx
<BarChart
  orientation="vertical"
  title="Price point"
  data={require('../fixtures/bar-chart-price-point.js').default}
  tooltip={({ y, percentage }) =>
    `Quantity: ${y}<br>Percent: ${percentage.toFixed(0)}%`
  }
/>
```
