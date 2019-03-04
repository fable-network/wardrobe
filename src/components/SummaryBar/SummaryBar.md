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
</SummaryBar>;
```

With more stuff:

```jsx
const DisplayValue = require('../DisplayValue').default;
const Button = require('../Button').default;
const Ruler = require('../Ruler').default;
<SummaryBar
  buttons={
    <React.Fragment>
      <Button><nobr>Clear cart</nobr></Button>
      <Button appearance="primary">Checkout</Button>
    </React.Fragment>
  }
>
  <DisplayValue label="Styles">3</DisplayValue>
  <DisplayValue label="Pre-packs">1</DisplayValue>
  <DisplayValue label="Pieces">10</DisplayValue>
  <Ruler direction="vertical" />
  <DisplayValue label="Total RRP">EUR 20,456.00</DisplayValue>
  <DisplayValue label="Total WSP">
    EUR <span style={{ textDecoration: 'line-through' }}>15,982.00</span>{' '}
    <span style={{ color: 'red' }}>13,500.55</span>
  </DisplayValue>
  <DisplayValue label="Markup">2.3</DisplayValue>
  <DisplayValue label="Discount">
    <span style={{color: 'red'}}>10%</span>
   </DisplayValue>
</SummaryBar>;
```
