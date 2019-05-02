The `Text` component saves you from having to individually apply styles for `font-weight`, `font-size`
and `line-height` to components, while using the defined typographic styles. The size and weight of the
text can be defined with the `size` prop and `bold` props which take a t-shirt size (XS - XXXL) and a
boolean. The `renderAs` prop can be used to determine which tag is used for the element (defaults to `p`).

These tags come without margins, so using the [Box](/#/Layout?id=box) component to space them is recommended.

```jsx
<Text bold size="XXXL" renderAs="h1">Some text in the h1 style</Text>
<Text renderAs="div">Some copy in the base size and rendered in a div</Text>
```

### Helper components

There are also the following helper components for headings, which make the text bold and the apply the
correct size. They will also use the correct HTML element (e.g. `<h1>`) though this can also be overridden
by the `renderAs` prop if necessary.

- `<Text.H1>`
- `<Text.H2>`
- `<Text.H3>`
- `<Text.H4>`
- `<Text.H5>`
- `<Text.H6>`

```jsx
<Text.H3>An h3 created using a helper component</Text.H3>
```
