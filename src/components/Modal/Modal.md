A component to display any content as a modal with a backdrop. Default mobile (under `992px`) `width` is 100%. Above `992px` the content is centered.

Simple modal example:

```jsx
const Button = require('../Button').default;

class StyleguideExample extends React.Component {
  constructor() {
    super();
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
        >
          <p style={{ color: 'white' }}>I'm modal content</p>
        </Modal>
      </div>
    );
  }
}
<StyleguideExample />;
```

Modal dialog example (look into this code for actual usage):

```jsx
const Button = require('../Button').default;
const Dialog = require('../Dialog').default;

class StyleguideExample extends React.Component {
  constructor() {
    super();
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

  renderItems(count) {
    return Array.from(new Array(count)).map((_, index) => <li key={index}>Item {index}</li>);
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
          preventGlobalScroll={true} // default
        >
          <Dialog size="normal">
            <Dialog.Header>You are changing the status of this order to Shipped</Dialog.Header>
            <Dialog.Body>
              <p>This body has pre-defined paddings.</p>
              <p>A lot of content here to demostrate scrolling behaviour.</p>
              <ul>{this.renderItems(50)}</ul>
            </Dialog.Body>
            <Dialog.Footer>
              <Button appearance="primary" onClick={this.handleClose}>
                Let's do that!
              </Button>
              <Button onClick={this.handleClose}>Cancel</Button>
            </Dialog.Footer>
          </Dialog>
        </Modal>
      </div>
    );
  }
}
<StyleguideExample />;
```
