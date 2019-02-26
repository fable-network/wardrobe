A pie chart for a few data points and custom tooltip.
Example usage: theme distribution for an order.

```jsx
<PieChart
  title="Distribution of themes"
  data={require('../fixtures/pie-chart.js').data}
  tooltip={require('../fixtures/pie-chart.js').tooltip}
/>
```

With custom colors and no tooltip:

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
  tooltip={require('../fixtures/pie-chart-one.js').tooltip}
/>
```
