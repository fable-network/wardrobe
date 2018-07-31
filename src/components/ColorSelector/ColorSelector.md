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

As part of a group:

```jsx
<div>
  <ColorSelector
    color="#5F9DC7"
    onClick={() => alert('#5F9DC7')}
    text="Sky blue"
  />
</div>
<div>
  <ColorSelector
    color="#aecc76"
    text="Lime green"
    onClick={() => alert('#aecc76')}
  />
</div>
<div>
  <ColorSelector
    color="#e25454"
    disableInteraction={true}
    text="Flame red (Selected)"
    onClick={() => alert('#e25454')}
    selected={true}
  />
</div>
<div>
  <ColorSelector
    patternImage="src/static/images/patternImage.jpg"
    onClick={() => alert('Pattern image')}
    text="Pattern image"
  />
</div>
