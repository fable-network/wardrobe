```jsx noeditor
const theme = require('../../theme/colors').default;
<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  }}
>
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
      <li>input field placeholder text,</li>
      <li>text in filters.</li>
    </ul>
  </Colors>
  <Colors name="grey04">
    <ul>
      <li>disabled control background (primary button) or border (input, dropdown).</li>
    </ul>
  </Colors>
  <Colors name="grey05">
    <ul>
      <li>control border (input, dropdown),</li>
      <li>hovered dropdown item.</li>
    </ul>
  </Colors>
  <Colors name="white">
    <ul>
      <li>modal background,</li>
      <li>control background,</li>
      <li>primary CTA text.</li>
    </ul>
  </Colors>
  <Colors name="primary">
    <ul>
      <li>main CTA,</li>
      <li>links,</li>
      <li>bottom border on active menu.</li>
    </ul>
  </Colors>
  <Colors name="primaryActive">
    <ul>
      <li>primary CTA on hover.</li>
    </ul>
  </Colors>
  <Colors name="backgroundPrimary">
    <ul>
      <li>CTA block background to highlight the main interaction on the page.</li>
    </ul>
  </Colors>
  <Colors name="backgroundSecondary">
    <ul>
      <li>outside page background (not used space).</li>
    </ul>
  </Colors>
  <Colors name="danger">
    <ul>
      <li>form fields' error message,</li>
      <li>toaster message with error background,</li>
      <li>any error icon / indicator.</li>
    </ul>
  </Colors>
  <Colors name="success">
    <ul>
      <li>toaster message with success background,</li>
      <li>form fields' completed indicator,</li>
      <li>any other success icon / indicator.</li>
    </ul>
  </Colors>
  <Colors name="warning">
    <ul>
      <li>toaster warning or info message background,</li>
      <li>any other warning icon / indicator.</li>
    </ul>
  </Colors>
</div>;
```

### Remarks

Colors are part of a theme. If you use a theme from the Wardrobe, you can access them via the theme object:

```js static
`color: ${p => p.theme.grey01};`;
```
