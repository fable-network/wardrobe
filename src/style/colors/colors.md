```jsx noeditor
const styled = require('styled-components').default;
const theme = require('../../theme/colors').default;
const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  & + & {
    margin-top: 5rem;
  }
`;
<React.Fragment>
  <Row>
    <Colors name="primary">
      <ul>
        <li>main CTA,</li>
        <li>links,</li>
        <li>checkbox / radio background,</li>
        <li>selected filter text,</li>
        <li>bottom border on active menu.</li>
      </ul>
    </Colors>
    <Colors name="primaryActive">
      <ul>
        <li>icons on hover,</li>
        <li>primary CTA on hover,</li>
        <li>progress bar,</li>
        <li>bar charts' columns.</li>
      </ul>
    </Colors>
    <Colors name="pageBackground">
      <ul>
        <li>page background for unused (outer) space.</li>
      </ul>
    </Colors>
  </Row>
  <Row>
    <Colors name="danger">
      <ul>
        <li>form fields' error message,</li>
        <li>toaster message with error highlight/border,</li>
        <li>styles out of stock,</li>
        <li>any error icon / indicator.</li>
      </ul>
    </Colors>
    <Colors name="backgroundDanger" />
    <Colors name="success">
      <ul>
        <li>toaster message with success highlight/border,</li>
        <li>form fields' completed indicator,</li>
        <li>order status `shipped`,</li>
        <li>any other success icon / indicator.</li>
      </ul>
    </Colors>
    <Colors name="backgroundSuccess" />
    <Colors name="warning">
      <ul>
        <li>toaster warning or info message highlight/border,</li>
        <li>order status `mixed`,</li>
        <li>customer status `no magch`,</li>
        <li>any other warning icon / indicator.</li>
      </ul>
    </Colors>
    <Colors name="backgroundWarning" />
    <Colors name="info">
      <ul>
        <li>information messages/toasts highlight/border,</li>
        <li>any other info icon / indicator.</li>
      </ul>
    </Colors>
    <Colors name="backgroundInfo" />
  </Row>
  <Row>
    <Colors name="grey01">
      <ul>
        <li>titles,</li>
        <li>active menu points,</li>
        <li>summaries,</li>
        <li>info blocks,</li>
        <li>form labels.</li>
      </ul>
    </Colors>
    <Colors name="grey02">
      <ul>
        <li>body text,</li>
        <li>inactive menu points.</li>
      </ul>
    </Colors>
    <Colors name="grey03">
      <ul>
        <li>disabled control text color,</li>
        <li>input field placeholder text,</li>
        <li>text in filters.</li>
      </ul>
    </Colors>
    <Colors name="grey04">
      <ul>
        <li>???</li>
      </ul>
    </Colors>
    <Colors name="grey05">
      <ul>
        <li>control border (input, dropdown),</li>
        <li>table cell borders,</li>
        <li>horizontal rulers,</li>
        <li>dropdown / overflow menu borders.</li>
      </ul>
    </Colors>
    <Colors name="grey06">
      <ul>
        <li>disabled control background and border,</li>
        <li>hovered dropdown item,</li>
        <li>keyboard-focused element background.</li>
      </ul>
    </Colors>
    <Colors name="white">
      <ul>
        <li>modal background,</li>
        <li>control background,</li>
        <li>primary CTA text.</li>
      </ul>
    </Colors>
  </Row>
</React.Fragment>;
```

### Remarks

Colors are part of a theme. If you use a theme from the Wardrobe, you can access them via the theme object:

```js static
`color: ${p => p.theme.grey01};`;
```
