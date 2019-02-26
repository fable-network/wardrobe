A pie chart for a few data points and custom tooltip. 
Example usage: theme distribution for an order.

```jsx
const { data, colors, tooltip } = require('../fixtures/pie-chart.js');
<PieChart
  title="Distribution of themes"
  data={data}
  tooltip={tooltip}
/>;
```

With custom colors and no tooltip:

```jsx
const { data, colors } = require('../fixtures/pie-chart-custom-colors.js');
<PieChart
  title="Distribution of themes"
  data={data}
  colors={colors}
/>;
```

With one data point and no title:

```jsx
const { data, colors, tooltip } = require('../fixtures/pie-chart-one.js');
<PieChart
  data={data}
  colors={colors}
  tooltip={tooltip}
/>;
```
