Ruler component, horizontal by default:

```jsx
<Ruler /> 
```

But also can be vertical, just remember you have to use it inside a `flex` container:

```jsx
const Stack = require('../../layout/Stack').default;
<Stack direction="horizontal">
  <span>Something</span>
  <Ruler direction="vertical" />
  <span>Something else</span> 
</Stack>
```
