Icon button is a button consisting **only** of an icon. If you want to make a button with icon and text, please use [Button](#/Components?id=button).

Has a small padding around to ease reachability.

Pass any SVG or [Icon](#/Components?id=icon) as a child.

```jsx
const Icon = require('../Icon').default;
<IconButton>
  <Icon name="caret-down" fill="currentColor" />
</IconButton>;
```

A disabled icon button:

```jsx
const Icon = require('../Icon').default;
<IconButton disabled>
  <Icon name="caret-down" fill="currentColor" />
</IconButton>;
```

A danger icon button:

```jsx
const Icon = require('../Icon').default;
<IconButton appearance="danger">
  <Icon name="cross" fill="currentColor" />
</IconButton>;
```
