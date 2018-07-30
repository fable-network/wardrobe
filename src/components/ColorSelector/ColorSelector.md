Static color selector:

```jsx
<ColorSelector
  color="#e25454"
  isStatic={true}
/>
```

Color Selector with click handler:

```jsx
<ColorSelector
  color="#5F9DC7"
  onClick={() => alert('Clicked!')}
/>
```

Color selector with pattern image:

```jsx
<ColorSelector
  patternImage="https://app.fashiontrade.construction/api/image/be8eb3d59eabe9dcaa41383eba5ba43bc641e7a9980ed4af02714401871a314a.jpg?w=265&h=330"
/>
```

Color Selector with text:

```jsx
<ColorSelector
  color="#aecc76"
  text="Lime green"
/>
```

Selected color selector:

```jsx
<ColorSelector
  color="#aecc76"
  selected={true}
  text="Lime green"
/>
```
