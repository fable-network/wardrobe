The `Field` component is an `Input` with a label positioned above it. The component to render as the `Input`
must be passed into the `Field` via the `renderInput` prop. Other fields props passed into the field will also
be passed into the `WithLabel` component.

By default it will reserve some space below it for an error message. If this is not needed, you can pass `false`
into the `reserveSpaceForError` prop

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
  errorMessage="An error message"
  renderInput={({ invalid }) => (
    <Input type="text" placeholder="Empty state" value="" onChange={() => null} invalid />
  )}
/>;
```

With no space below for an error:

```jsx
const Input = require('../Input').default;

<Field
  label="Label"
  reserveSpaceForError={false}
  renderInput={() => <Input type="text" placeholder="Empty state" value="" onChange={() => null} />}
/>;
```
