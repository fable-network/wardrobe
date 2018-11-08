Grid component is a parent component for grid cells and is used to create a responsive grid layout.
See [Media](/#/Theme?id=media) for breakpoints' details.

|              | Mobile   | Tablet   | Desktop  | Wide      |
| ------------ | -------- | -------- | -------- | --------- |
| Screen size  | `<600px` | `≥600px` | `≥900px` | `≥1200px` |
| # of columns | `6`      | `6`      | `12`     | `12`      |
| Gutter width | `32px`   |

The values have been chosen to match with an 8px-grid.

```jsx
const Content = ({ index }) => (
  <div
    style={{
      backgroundColor: `#${index % 3 === 0 ? 'f' : 'c'}${index % 3 === 1 ? 'f' : 'c'}${
        index % 3 === 2 ? 'f' : 'c'
      }`,
      padding: '8px',
      height: '24px',
      marginTop: '8px',
      marginBottom: '8px',
      textAlign: 'center',
    }}
  />
);
const renderCells = (count, { mobile, tablet, desktop, wide } = {}) =>
  Array.from(new Array(count)).map((_, index) => (
    <Grid.Cell key={index} mobile={mobile} tablet={tablet} desktop={desktop} wide={wide}>
      <Content index={index} />
    </Grid.Cell>
  ));

<div>
  <p>A normal grid with default params:</p>
  <Grid>{renderCells(12)}</Grid>

  <p>A desktops-only grid (2 columns on desktops, 100% on mobiles and tablets):</p>
  <Grid>{renderCells(6, { mobile: 6, tablet: 6, desktop: 2, wide: 2 })}</Grid>

  <p>
    A mixed non-responsive grid (as in cells are keeping the same amount of columns on different
    viewport sizes):
  </p>
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
  </Grid>

  <p>Not fully filled grid:</p>
  <Grid>
    <Grid.Cell columns={3}>
      <Content index={0} />
    </Grid.Cell>
    <Grid.Cell columns={5}>
      <Content index={1} />
    </Grid.Cell>
  </Grid>

  <p>Not fully filled grid with `right` alignment:</p>
  <Grid align="right">
    <Grid.Cell columns={3}>
      <Content index={0} />
    </Grid.Cell>
    <Grid.Cell columns={5}>
      <Content index={1} />
    </Grid.Cell>
  </Grid>

  <p>Not fully filled grid with a simple offset:</p>
  <Grid>
    <Grid.Cell columns={3} offset={1}>
      <Content index={0} />
    </Grid.Cell>
    <Grid.Cell columns={5} offset={1}>
      <Content index={1} />
    </Grid.Cell>
  </Grid>

  <p>Not fully filled grid with `right` alignment and a simple offset:</p>
  <Grid align="right">
    <Grid.Cell columns={1}>
      <Content index={0} />
    </Grid.Cell>
    <Grid.Cell columns={2} offset={1}>
      <Content index={1} />
    </Grid.Cell>
  </Grid>

  <p>Different offsets on different screen sizes:</p>
  <Grid>
    <Grid.Cell columns={1} offsetMobile={2} offsetTablet={3} offsetDesktop={11} offsetWide={8}>
      <Content index={0} />
    </Grid.Cell>
  </Grid>
</div>;
```
