Uncontrolled example:

```jsx
<Accordion>
  <Accordion.Item title="A title">
    <p>some body text</p>
  </Accordion.Item>
  <Accordion.Item title="Another title">
    <p>some more body text</p>
  </Accordion.Item>
</Accordion>
```

Uncontrolled example, second item is open by default:

```jsx
<Accordion>
  <Accordion.Item title="A title">
    <p>some body text</p>
  </Accordion.Item>
  <Accordion.Item title="Another title" defaultOpen={true}>
    <p>some more body text</p>
  </Accordion.Item>
</Accordion>
```

Controlled example, first item is open:

```jsx
<Accordion>
  <Accordion.Item title="A title" open={true}>
    <p>some body text</p>
  </Accordion.Item>
  <Accordion.Item title="Another title" open={false}>
    <p>some more body text</p>
  </Accordion.Item>
</Accordion>
```

Controlled example, all items are open:

```jsx
<Accordion>
  <Accordion.Item title="A title" open={true}>
    <p>some body text</p>
  </Accordion.Item>
  <Accordion.Item title="Another title" open={true}>
    <p>some more body text</p>
  </Accordion.Item>
</Accordion>
```
