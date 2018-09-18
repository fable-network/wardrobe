Dropdown:

```jsx
<Dropdown label="Don't push me">
  <Dropdown.Item onClick={() => alert('Clicked 1')}>
    <nobr>...cause I'm close to the edge</nobr>
  </Dropdown.Item>
  <Dropdown.Item onClick={() => alert('Clicked 2')}>
    <nobr>I'm trying not to lose my head</nobr>
  </Dropdown.Item>
  <Dropdown.Item onClick={() => alert('Clicked 3')}>
    <nobr>It's like a jungle sometimes</nobr>
  </Dropdown.Item>
  <Dropdown.Item onClick={() => alert('Clicked 4')}>
    <nobr>It makes me wonder how I keep from goin' under</nobr>
  </Dropdown.Item>
  <Dropdown.Item onClick={() => alert('Don\'t push me')}>
    <nobr>-- Grandmaster Flash</nobr>
  </Dropdown.Item>
</Dropdown>
```

Dropdown panel will expand horizontally when content does not allow wrapping.

```jsx
<Dropdown label="Push Me">
  <nobr>You can place any content you prefer here.</nobr>
</Dropdown>
```

Dropdown selected.

```jsx
<Dropdown isSelected={true} label="Push Me">
  <Dropdown.Item>
    Check that checkmark
  </Dropdown.Item>
</Dropdown>
```

Dropdown loading.

```jsx
<Dropdown isLoading={true} label="Something is happening">
  <Dropdown.Item>
    Hold on I'm loading
  </Dropdown.Item>
</Dropdown>
```

Dropdown disabled.

```jsx
<Dropdown disabled>
  <Dropdown.Item>
    I'll never be seen
  </Dropdown.Item>
</Dropdown>
```

Dropdown panel is limited to 75% to the device height

```jsx
const largeList = [];
for (i=0; i<30; i++) {
  largeList.push(<Dropdown.Item key={i}>Scrolling</Dropdown.Item>);
}
<Dropdown label="Push Me">
  {largeList}
</Dropdown>
```
