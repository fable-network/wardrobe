Color selector (without interaction):

```jsx
<ColorSelector
  color="#e25454"
  disableInteraction={true}
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
  patternImage="src/static/images/patternImage.jpg"
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

Color Selector with a fixed size of 40px:

```jsx
<ColorSelector
  color="#e25454"
  fixedSize='40px'
  onClick={() => alert('40px')}
/>
```

As part of a group:

```jsx
<div style={{padding: '3px 0'}}>
  <ColorSelector
    color="#5F9DC7"
    onClick={() => alert('#5F9DC7')}
    text="Sky blue"
  />
</div>
<div style={{padding: '3px 0'}}>
  <ColorSelector
    color="#aecc76"
    text="Lime green"
    onClick={() => alert('#aecc76')}
  />
</div>
<div style={{padding: '3px 0'}}>
  <ColorSelector
    color="#e25454"
    text="Flame red (Selected)"
    onClick={() => alert('#e25454')}
    selected={true}
  />
</div>
<div style={{padding: '3px 0'}}>
  <ColorSelector
    patternImage="src/static/images/patternImage.jpg"
    onClick={() => alert('Pattern image')}
    text="Pattern image"
  />
</div>
