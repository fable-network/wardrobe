Header is auto-styled only when it's `children` is a single string. It has big `font-size` on mobile
and when `size=small`, and even bigger `font-size` otherwise.

### Normal size

```jsx
<Dialog size="normal" open={true}>
  <Dialog.Header>You are changing the status of this order to Shipped</Dialog.Header>
  <Dialog.Body>This body has pre-defined paddings.</Dialog.Body>
  <Dialog.Footer>
    <Button appearance="primary" onClick={() => {}}>
      Let us do that!
    </Button>
    <Button onClick={() => {}}>Cancel</Button>
  </Dialog.Footer>
</Dialog>
```

### Small size

```jsx
<Dialog size="small" open={true}>
  <Dialog.Header>You are changing the status of this order to Shipped</Dialog.Header>
  <Dialog.Body>This body has pre-defined paddings.</Dialog.Body>
  <Dialog.Footer>
    <Button appearance="primary" onClick={() => {}}>
      Let us do that!
    </Button>
    <Button onClick={() => {}}>Cancel</Button>
  </Dialog.Footer>
</Dialog>
```

### Large size

```jsx
<Dialog size="large" open={true}>
  <Dialog.Header>You are changing the status of this order to Shipped</Dialog.Header>
  <Dialog.Body>This body has pre-defined paddings.</Dialog.Body>
  <Dialog.Footer>
    <Button appearance="primary" onClick={() => {}}>
      Let us do that!
    </Button>
    <Button onClick={() => {}}>Cancel</Button>
  </Dialog.Footer>
</Dialog>
```

### Auto size

Goes with normal paddings and auto width on desktop.

```jsx
<Dialog size="auto" open={true}>
  <Dialog.Header>You are changing the status of this order to Shipped</Dialog.Header>
  <Dialog.Body>This body has pre-defined paddings.</Dialog.Body>
  <Dialog.Footer>
    <Button appearance="primary" onClick={() => {}}>
      Let us do that!
    </Button>
    <Button onClick={() => {}}>Cancel</Button>
  </Dialog.Footer>
</Dialog>
```

### Custom header

```jsx
<Dialog open={true}>
  <Dialog.Header>
    <h1 style={{ color: 'black' }}>You can suppy your own header</h1>
  </Dialog.Header>
  <Dialog.Body>
    If you do so, styling is up to you. For example, see that this header also has default `h1`
    margins.
  </Dialog.Body>
  <Dialog.Footer>
    <Button appearance="primary" onClick={() => {}}>
      Ik snap het!
    </Button>
    <Button onClick={() => {}}>Nee!</Button>
  </Dialog.Footer>
</Dialog>
```

### Custom body

```jsx
<Dialog open={true}>
  <Dialog.Header>Check out the body &darr;</Dialog.Header>
  <div style={{ width: '100%', backgroundColor: 'black', color: 'white' }}>I'm full width!</div>
  <Dialog.Footer>
    <Button appearance="primary" onClick={() => {}}>
      Got it!
    </Button>
    <Button onClick={() => {}}>Cancel</Button>
  </Dialog.Footer>
</Dialog>
```
