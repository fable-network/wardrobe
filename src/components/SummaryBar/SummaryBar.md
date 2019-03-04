SummaryBar component:

```jsx
const DisplayValue = require('../DisplayValue').default;
const Button = require('../Button').default;
<SummaryBar
  buttons={
    <React.Fragment>
      <Button>Clear cart</Button>
      <Button appearance="primary">Checkout</Button>
    </React.Fragment>
  }
>
  <DisplayValue label="Styles">3</DisplayValue>
  <DisplayValue label="Pre-packs">1</DisplayValue>
  <DisplayValue label="Pieces">10</DisplayValue>
</SummaryBar>
```
