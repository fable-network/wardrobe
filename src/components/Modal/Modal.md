Full live example (look into this code for the actual usage):

```jsx
const Button = require('../Button').default;
class StyleguideExample extends React.Component {
  constructor() {
    this.state = { open: false };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleOpen() {
    this.setState({ open: true });
  }
  handleClose() {
    this.setState({ open: false });
  }
  render() {
    return (
      <div>
        <Button onClick={this.handleOpen}>Open modal</Button>
        <Modal
          open={this.state.open} // required
          onClose={this.handleClose} // required
          backdropColor="rgba(255, 255, 255, 0.8)" //custom
          blockScrolling={true} // default
          size="normal" // default
          preventGlobalScroll={true} // default
        >
          <Modal.Header>You are changing the status of this order to Shipped</Modal.Header>
          <Modal.Body>
            <p>This body has pre-defined paddings.</p>
            <p>A lot of content here to demostrate scrolling behaviour.</p>
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button appearance="primary" onClick={this.handleClose}>
              Let's do that!
            </Button>
            <Button onClick={this.handleClose}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
<StyleguideExample />;
```

## Modal variations explained inline

Default mobile (under `992px`) `width` is 100%. For desktop, the `width` is based on a `size` prop.

Header is auto-styled only when it's `children` is a single string. It has big `font-size` on mobile
and when `size=small`, and even bigger `font-size` otherwise.

### Normal size

```jsx
const SModal = require('./StyleguideModal').default;
<SModal size="normal">
  <Modal.Header>You are changing the status of this order to Shipped</Modal.Header>
  <Modal.Body>This body has pre-defined paddings.</Modal.Body>
  <Modal.Footer>
    <Button appearance="primary" onClick={this.handleClose}>
      Let's do that!
    </Button>
    <Button onClick={this.handleClose}>Cancel</Button>
  </Modal.Footer>
</SModal>;
```

### Small size

```jsx
const SModal = require('./StyleguideModal').default;
<SModal size="small">
  <Modal.Header>You are changing the status of this order to Shipped</Modal.Header>
  <Modal.Body>This body has pre-defined paddings.</Modal.Body>
  <Modal.Footer>
    <Button appearance="primary" onClick={this.handleClose}>
      Let's do that!
    </Button>
    <Button onClick={this.handleClose}>Cancel</Button>
  </Modal.Footer>
</SModal>;
```

### Large size

```jsx
const SModal = require('./StyleguideModal').default;
<SModal size="large">
  <Modal.Header>You are changing the status of this order to Shipped</Modal.Header>
  <Modal.Body>This body has pre-defined paddings.</Modal.Body>
  <Modal.Footer>
    <Button appearance="primary" onClick={this.handleClose}>
      Let's do that!
    </Button>
    <Button onClick={this.handleClose}>Cancel</Button>
  </Modal.Footer>
</SModal>;
```

### Auto size

Goes with normal paddings and auto width on desktop.

```jsx
const SModal = require('./StyleguideModal').default;
<SModal size="auto">
  <Modal.Header>You are changing the status of this order to Shipped</Modal.Header>
  <Modal.Body>This body has pre-defined paddings.</Modal.Body>
  <Modal.Footer>
    <Button appearance="primary" onClick={this.handleClose}>
      Let's do that!
    </Button>
    <Button onClick={this.handleClose}>Cancel</Button>
  </Modal.Footer>
</SModal>;
```

### Custom header

```jsx
const SModal = require('./StyleguideModal').default;
<SModal size="auto">
  <Modal.Header>
    <h1>You can suppy your own header</h1>
  </Modal.Header>
  <Modal.Body>
    If you do so, styling is up to you. For example, see that this header also has default `h1`
    margins.
  </Modal.Body>
  <Modal.Footer>
    <Button appearance="primary" onClick={this.handleClose}>
      Ik snap het!
    </Button>
    <Button onClick={this.handleClose}>Nee!</Button>
  </Modal.Footer>
</SModal>;
```

### Custom body

```jsx
const SModal = require('./StyleguideModal').default;
<SModal size="auto">
  <Modal.Header>
    Check out the body &darr;
  </Modal.Header>
  <div style={{ width: '100%', backgroundColor: 'black', color: 'white' }}>I'm full width!</div>
  <Modal.Footer>
    <Button appearance="primary" onClick={this.handleClose}>
      Got it!
    </Button>
    <Button onClick={this.handleClose}>Cancel</Button>
  </Modal.Footer>
</SModal>;
```
