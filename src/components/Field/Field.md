The `Field` component is an `Input` with a label positioned above it. The component to render as the `Input`
must be passed into the `Field` via the `renderInput` prop. Other fields props passed into the field will also
be passed into the `WithLabel` component.

Standard:

```jsx
const Input = require('../Input').default;

<Field
  label="Label"
  renderInput={() => <Input type="text" placeholder="Empty state" value="" onChange={() => null} />}
/>;
```

Invalid state:

```jsx
const Input = require('../Input').default;

<Field
  invalid={true}
  label="Label"
  renderInput={({ invalid }) => (
    <Input type="text" placeholder="Empty state" value="" onChange={() => null} invalid />
  )}
/>;
```
