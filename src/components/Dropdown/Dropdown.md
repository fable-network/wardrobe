Dropdown:

```jsx
<Dropdown label="Don't push me...">
  <DropdownItem onClick={() => alert('Clicked 1')}>
    <nobr>...cause I'm close to the edge</nobr>
  </DropdownItem>
  <DropdownItem onClick={() => alert('Clicked 2')}>
    <nobr>I'm trying not to lose my head</nobr>
  </DropdownItem>
  <DropdownItem onClick={() => alert('Clicked 3')}>
    <nobr>It's like a jungle sometimes</nobr>
  </DropdownItem>
  <DropdownItem onClick={() => alert('Clicked 4')}>
    <nobr>It makes me wonder how I keep from goin' under</nobr>
  </DropdownItem>
  <DropdownItem onClick={() => alert('Don\'t push me')}>
    <nobr>-- Grandmaster Flash</nobr>
  </DropdownItem>
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
  <DropdownItem>
      Check that checkmark
    </DropdownItem>
</Dropdown>
```

Dropdown panel is limited to 75% to the device height

```jsx
const largeList = [];
for (i=0; i<30; i++) {
  largeList.push(<DropdownItem key={i}>Scrolling</DropdownItem>);
}
<Dropdown label="Push Me">
  {largeList}
</Dropdown>
```
