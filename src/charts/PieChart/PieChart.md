A pie chart for a few data points and custom tooltip.
Example usage: theme distribution for an order.

```jsx
<PieChart
  title="Distribution of themes"
  data={require('../fixtures/pie-chart.js').data}
  tooltip={({ y, point: { percentage } }) => `Quantity: ${y}<br>Percent: ${percentage.toFixed(0)}%`}
/>
```

With custom colors:

```jsx
<PieChart
  title="Distribution of themes"
  data={require('../fixtures/pie-chart-custom-colors.js').data}
  colors={require('../fixtures/pie-chart-custom-colors.js').colors}
/>
```

With one data point and no title:

```jsx
<PieChart
  data={require('../fixtures/pie-chart-one.js').data}
  colors={require('../fixtures/pie-chart-one.js').colors}
  tooltip={({ y, point: { percentage } }) => `Quantity: ${y}<br>Percent: ${percentage.toFixed(0)}%`}
/>
```
