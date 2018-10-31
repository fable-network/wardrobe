A responsive Container for your content. See [Media](/#/Theme?id=media) for breakpoints' details.

The Container component can be used in any context. It always has a `16px` padding on left and right, 
and its max width for each breakpoint is:

|                     | Mobile   | Tablet   | Desktop  | Wide      |
| ------------------- | -------- | -------- | -------- | --------- |
| Screen size         | `<600px` | `≥600px` | `≥900px` | `≥1200px` |
| Max width           | `100%`   | `600px`  | `896px`  | `1200px`  |
| Content width       | `calc(100%-32px)` | `568px` | `864px` | `1168px` |

The values have been chosen to match with an 8px-grid.

When the `fluid` prop is true, `width` is always `100%` and content width is always `calc(100%-32px)`.

