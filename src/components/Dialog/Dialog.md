Header is auto-styled only when it's `children` is a single string. It has big `font-size` on mobile
and when `size=small`, and even bigger `font-size` otherwise.

### Normal size

```jsx
<Dialog size="normal">
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
<Dialog size="small">
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
<Dialog size="large">
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
<Dialog size="auto">
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

### Body only

Body-only dialogs can be used for modals with complex structure (e.g. to display product details).

Also you can use `showCloseButton` property to display a cross button in the top right corner.

```jsx
<Dialog showCloseButton={true} onClose={() => alert('close!')}>
  <Dialog.Body>
    Body-only dialogs can be used for modals with complex structure (e.g. to display product details).
  </Dialog.Body>
</Dialog>
```
