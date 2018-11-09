A responsive Container for your content. See [Media](/#/Theme?id=media) for breakpoints' details.

The Container component can be used in any context. It always has a `16px` padding on left and right, 
and its max width for each breakpoint is:

|                     | Mobile   | Tablet   | Desktop  | Wide      |
| ------------------- | -------- | -------- | -------- | --------- |
| Screen size         | `<600px` | `≥600px` | `≥900px` | `≥1200px` |
| Width               | `100%`   | `600px`  | `896px`  | `1200px`  |
| Content width       | `calc(100%-32px)` | `568px` | `864px` | `1168px` |

The values have been chosen to match with an 8px-grid.

When the `fluid` prop is true, `width` is always `100%` and content width is always `calc(100%-32px)`.

A real life sample in a modal:

```jsx
const styled = require('styled-components').default;
const Button = require('../../components/Button').default;

const SampleContent = styled.div`
  width: 100%;
  height: 3em;
  background-color: ${p => p.theme.lighter};
`;

const ContainerStyled = styled(Container)`
  border: solid 1px red;
`;

const ModalStyled = styled(Modal)`
  >:first-child {
    height: auto;
  }
`;

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
        <ModalStyled
          open={this.state.open}
          onClose={this.handleClose}
        >
          <ContainerStyled>
            <SampleContent />          
          </ContainerStyled>
        </ModalStyled>
      </div>
    );
  }
}
<StyleguideExample />;
```
