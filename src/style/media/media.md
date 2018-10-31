Breakpoints are inspired by [The 100% correct way to do CSS breakpoints](https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862).

|                     | Mobile   | Tablet   | Desktop  | Wide      |
| ------------------- | -------- | -------- | -------- | --------- |
| Screen size         | `<600px` | `≥600px` | `≥900px` | `≥1200px` |
| Max container width | `100%`   | `568px`  | `864px`  | `1168px`  |
| # of columns        | `6`      | `6`      | `12`     | `12`      |
| Gutter width        | `32px`   |

### Available media rules

Media queries are in pixels. See [Don't use em for media queries](https://adamwathan.me/dont-use-em-for-media-queries/).

```jsx noeditor
const theme = require('../../theme/media').default;
const Table = require('../../components/Table').default;
<Table>
  {Object.keys(theme).map(media => <Media name={media} value={theme[media]``} key={media} />)}
</Table>;
```

### Remarks

Media rules are part of a theme. If you use a theme from the Wardrobe, you can access them via the theme object:

```js static
`
  background: red;
  ${p => p.theme.tablet_up`
    background: blue;
  `};
`;
```
