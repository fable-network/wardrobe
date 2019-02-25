A column chart for a few data points. Example usage: delivery window distribution for an order.

```jsx
const { categories, data } = require('../fixtures/column-chart.js');
<ColumnChart
  title="Distribution of delivery"
  categories={categories}
  data={data}
  captionFormatter={value => (value === 1 ? 'piece' : 'pieces')}
/>;
```

With one data point:

```jsx
const { categories, data } = require('../fixtures/column-chart-one.js');
<ColumnChart
  title="Distribution of delivery"
  categories={categories}
  data={data}
  captionFormatter={value => (value === 1 ? 'piece' : 'pieces')}
/>;
```

With a lot of data points:

```jsx
const { categories, data } = require('../fixtures/coilumn-chart-many.js');
<ColumnChart
  title="Distribution of delivery"
  categories={categories}
  data={data}
  captionFormatter={value => (value === 1 ? 'piece' : 'pieces')}
/>;
```

(Morale: don't use it for a lot of data points)
