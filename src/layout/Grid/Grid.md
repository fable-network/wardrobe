Grid component is a parent component for grid cells and is used to create a responsive grid layout.
See [Media](/#/Theme?id=media) for breakpoints' details.

|              | Mobile   | Tablet   | Desktop  | Wide      |
| ------------ | -------- | -------- | -------- | --------- |
| Screen size  | `<600px` | `≥600px` | `≥900px` | `≥1200px` |
| # of columns | `6`      | `6`      | `12`     | `12`      |
| Gutter width | `32px`   |

The values have been chosen to match with an 8px-grid.

A normal grid with default params:

```jsx
const { Content, renderCells } = require('./styleguide-helpers');
<Grid>{renderCells(12)}</Grid>;
```

A "not-mobile" grid (100% on mobiles, 2 columns on other screens):

```jsx
const { Content, renderCells } = require('./styleguide-helpers');

<Grid>{renderCells(6, { mobile: 6, tablet: 2, desktop: 2, wide: 2 })}</Grid>;
```

A mixed grid, cells are keeping the same amount of columns on different viewport sizes:

```jsx
const { Content, renderCells } = require('./styleguide-helpers');

<Grid>
  <Grid.Cell columns={2}>
    <Content index={0} />
  </Grid.Cell>
  <Grid.Cell columns={4}>
    <Content index={1} />
  </Grid.Cell>
  <Grid.Cell columns={6}>
    <Content index={2} />
  </Grid.Cell>
</Grid>;
```

Not fully filled grid:

```jsx
const { Content, renderCells } = require('./styleguide-helpers');

<Grid>
  <Grid.Cell columns={3}>
    <Content index={0} />
  </Grid.Cell>
  <Grid.Cell columns={5}>
    <Content index={1} />
  </Grid.Cell>
</Grid>;
```

Not fully filled grid with a simple offset:

```jsx
const { Content, renderCells } = require('./styleguide-helpers');

<Grid>
  <Grid.Cell columns={3} offset={1}>
    <Content index={0} />
  </Grid.Cell>
  <Grid.Cell columns={5} offset={1}>
    <Content index={1} />
  </Grid.Cell>
</Grid>;
```

Not fully filled grid with `rtl` (right to left) direction (notice the block order):

```jsx
const { Content, renderCells } = require('./styleguide-helpers');

<Grid direction="rtl">
  <Grid.Cell columns={3}>
    <Content index={0} />
  </Grid.Cell>
  <Grid.Cell columns={5}>
    <Content index={1} />
  </Grid.Cell>
</Grid>;
```

Not fully filled grid with `rtl` direction and a simple offset (offsets also from right):

```jsx
const { Content, renderCells } = require('./styleguide-helpers');

<Grid direction="rtl">
  <Grid.Cell columns={3} offset={1}>
    <Content index={0} />
  </Grid.Cell>
  <Grid.Cell columns={5} offset={1}>
    <Content index={1} />
  </Grid.Cell>
</Grid>;
```

Different offsets on different screen sizes:

```jsx
const { Content, renderCells } = require('./styleguide-helpers');

<Grid>
  <Grid.Cell columns={1} offsetMobile={2} offsetTablet={3} offsetDesktop={11} offsetWide={8}>
    <Content index={0} />
  </Grid.Cell>
</Grid>;
```
