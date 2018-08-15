**Default icon display**

The fill color that was provided in the original SVG are removed during the build process so the 
inherit fill attribute is used (normally `#000`). 

```jsx
<Icon name="caret-down" />
```

**Custom color (orange) set on the Icon itself**
```jsx
<Icon name="caret-down" color="orange" />
```

**Custom color (green) set by the `fill` attribute on a parent element**
```jsx
<div style={{ fill: 'green' }}>
  <Icon name="caret-down" />
</div>
```

**width / height**

When using a custom size, the aspect ratio of the icon is preserved. 
Whitespace will be added to create the desired width and height.

Custom size (100x20px), background color set to `khaki` to outline the SVG:
```jsx
<Icon name="caret-down" width="100" height="20" style={{background: 'khaki', fill: 'navy'}}/>
```

```jsx
<Icon name="caret-down" width="20" height="50" style={{background: 'khaki', fill: 'navy'}}/>
```
