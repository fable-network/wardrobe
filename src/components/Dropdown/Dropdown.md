Dropdown:

```jsx
<Dropdown label="Don't push me">
  <Dropdown.Item>
    <nobr>...cause I'm close to the edge</nobr>
  </Dropdown.Item>
  <Dropdown.Item>
    <nobr>I'm trying not to lose my head</nobr>
  </Dropdown.Item>
  <Dropdown.Item>
    <nobr>It's like a jungle sometimes</nobr>
  </Dropdown.Item>
  <Dropdown.Item>
    <nobr>It makes me wonder how I keep from goin' under</nobr>
  </Dropdown.Item>
  <Dropdown.Item>
    <nobr>-- Grandmaster Flash</nobr>
  </Dropdown.Item>
</Dropdown>
```

Dropdown with `persist=true`:

```jsx
<Dropdown label="Don't push me" persist>
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
  <Dropdown.Item onClick={() => alert("Don't push me")}>
    <nobr>-- Grandmaster Flash</nobr>
  </Dropdown.Item>
</Dropdown>
```

Dropdown with `preventOutOfBounds=true`:

```jsx
<Dropdown label="Don't push me" preventOutOfBounds>
  <Dropdown.Item>
    <nobr>...cause I'm close to the edge</nobr>
  </Dropdown.Item>
  <Dropdown.Item>
    <nobr>I'm trying not to lose my head</nobr>
  </Dropdown.Item>
  <Dropdown.Item>
    <nobr>It's like a jungle sometimes</nobr>
  </Dropdown.Item>
  <Dropdown.Item>
    <nobr>It makes me wonder how I keep from goin' under</nobr>
  </Dropdown.Item>
  <Dropdown.Item>
    <nobr>-- Grandmaster Flash</nobr>
  </Dropdown.Item>
</Dropdown>
```

Dropdown panel will expand horizontally when content does not allow wrapping.

```jsx
<Dropdown label="Push Me" persist>
  <nobr>You can place any content you prefer here.</nobr>
</Dropdown>
```

Dropdown selected.

```jsx
<Dropdown selected={true} label="Push Me">
  <Dropdown.Item>Check that checkmark</Dropdown.Item>
</Dropdown>
```

Dropdown loading.

```jsx
<Dropdown loading={true} label="Something is happening">
  <Dropdown.Item>Hold on I'm loading</Dropdown.Item>
</Dropdown>
```

Dropdown disabled.

```jsx
<Dropdown disabled={true}>
  <Dropdown.Item>I'll never be seen</Dropdown.Item>
</Dropdown>
```

Dropdown with a custom node label.

```jsx
<Dropdown label={<h3>h3 label</h3>}>
  <Dropdown.Item>Hey there</Dropdown.Item>
</Dropdown>
```

Dropdown controlled by `open` prop (`true`).

```jsx
<Dropdown open={true}>
  <Dropdown.Item>
    <nobr>You can't close me</nobr>
  </Dropdown.Item>
</Dropdown>
<div style={{height: '40px'}}/>
```

Dropdown controlled by `open` prop (`false`).

```jsx
<Dropdown open={false} label="You can't open me">
  <Dropdown.Item>
    <nobr>You will never see me</nobr>
  </Dropdown.Item>
</Dropdown>
```

Dropdown panel is limited to 75% to the device height

```jsx
const largeList = [];
for (i = 0; i < 30; i++) {
  largeList.push(<Dropdown.Item key={i}>Scrolling</Dropdown.Item>);
}
<Dropdown label="Push Me">{largeList}</Dropdown>;
```

Dropdown with a fluid toggle button:

```jsx
<Dropdown label="Don't push me" fluid={true}>
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
  <Dropdown.Item onClick={() => alert("Don't push me")}>
    <nobr>-- Grandmaster Flash</nobr>
  </Dropdown.Item>
</Dropdown>
```

Dropdown with a very long label (also try holding a cursor on it to see a tooltip):

```jsx
<div style={{ width: '240px' }}>
  <Dropdown label="Don't push me cause I'm close to the edge, I'm trying not to lose my head">
    <Dropdown.Item onClick={() => alert('Clicked 3')}>
      <nobr>It's like a jungle sometimes</nobr>
    </Dropdown.Item>
    <Dropdown.Item onClick={() => alert('Clicked 4')}>
      <nobr>It makes me wonder how I keep from goin' under</nobr>
    </Dropdown.Item>
    <Dropdown.Item onClick={() => alert("Don't push me")}>
      <nobr>-- Grandmaster Flash</nobr>
    </Dropdown.Item>
  </Dropdown>
</div>
```
