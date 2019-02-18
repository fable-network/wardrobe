Default with trigger prop.

```jsx
<ToolTip trigger={<span>Hover on me</span>} position="right">Tool tip body text</ToolTip>
```

Wrapped in a custom element (without trigger prop) always shown.

```jsx
<span style={{ position: 'relative' }}>
  <span>Custom trigger</span>
  <ToolTip position="right">Tool tip body text</ToolTip>
</span>
```

```jsx
<span style={{ position: 'relative' }}>
  <span>Custom trigger</span>
  <ToolTip position="right" appearance="dark">Tool tip body text</ToolTip>
</span>
```

Click trigger action

```jsx
<ToolTip
  trigger={<span>Click me</span>}
  position="right"
  triggerAction="click"
>
  Tool tip body text
</ToolTip>
```

Click trigger action that hides after 3 seconds

```jsx
<ToolTip
  trigger={<span>Click me</span>}
  position="right"
  triggerAction="click"
  displayTime={3000}
>
  Count to 3
</ToolTip>
```

Dark apperance

```jsx
<ToolTip
  trigger={<span>Hover</span>}
  appearance="dark"
  position="right"
>
  Tool tip body text
</ToolTip>
```

With `fluid` prop

```jsx
<ToolTip
  trigger={<span>Hover</span>}
  position="right"
  fluid
>
  Takes up width of the content.
</ToolTip>
```

Different `position` ("top")

```jsx
<ToolTip
  trigger={<span>Hover</span>}
  position="top"
  fluid
>
  I'm on top now
</ToolTip>
```

Different `position` ("bottom")

```jsx
<ToolTip
  trigger={<span>Hover</span>}
  position="bottom"
  fluid
>
  I'm on the bottom now
</ToolTip>
```

Different `position` ("left")

```jsx
<ToolTip
  trigger={<span>Hover</span>}
  position="left"
  fluid
>
  I'm on the left now
</ToolTip>
```
