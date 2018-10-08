Default:
```jsx
<Accordion.Item title="Accordion item title">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
  </p>
</Accordion.Item>
```

The `title` prop can also be a node:
```jsx
<Accordion.Item title={<h1>H1 Title</h1>}>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
  </p>
</Accordion.Item>
```

Controlled by `open` prop (`true`):
```jsx
<Accordion.Item title="Accordion item title" open={true}>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
  </p>
</Accordion.Item>
```

Controlled by `open` prop (`false`):
```jsx
<Accordion.Item title="Accordion item title" open={false}>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
  </p>
</Accordion.Item>
```

Disabled
```jsx
<Accordion.Item title="Accordion item title" disabled>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
  </p>
</Accordion.Item>
```
