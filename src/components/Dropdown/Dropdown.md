Dropdown can be used with any content inside the panel. But if you use it with `Dropdown.Item` you'll get some benefits:

- Uniform styling.
- Better keyboard navigation support.

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

Large Dropdown:

```jsx
<Dropdown label="Don't push me" size="large">
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

Dropdown with `persist=true` and `onSelect` handlers:

```jsx
<Dropdown label="Don't push me" persist>
  <Dropdown.Item onSelect={() => alert('Clicked 1')}>
    <nobr>...cause I'm close to the edge</nobr>
  </Dropdown.Item>
  <Dropdown.Item onSelect={() => alert('Clicked 2')}>
    <nobr>I'm trying not to lose my head</nobr>
  </Dropdown.Item>
  <Dropdown.Item onSelect={() => alert('Clicked 3')}>
    <nobr>It's like a jungle sometimes</nobr>
  </Dropdown.Item>
  <Dropdown.Item onSelect={() => alert('Clicked 4')}>
    <nobr>It makes me wonder how I keep from goin' under</nobr>
  </Dropdown.Item>
  <Dropdown.Item onSelect={() => alert("Don't push me")}>
    <nobr>-- Grandmaster Flash</nobr>
  </Dropdown.Item>
</Dropdown>
```

Dropdown with default out-of-bounds behaviour (`preventOutOfBounds=true`):

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

Dropdown with `preventOutOfBounds=true` moved to the right side:

```jsx
const styled = require('styled-components').default;
const Wrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
`;

<Wrapper>
  <Dropdown label="Don't push me" preventOutOfBounds>
    <Dropdown.Item>
      <nobr>...cause I'm close to the edge I'm trying not to lose my head</nobr>
    </Dropdown.Item>
    <Dropdown.Item>
      <nobr>I'm trying not to lose my head</nobr>
    </Dropdown.Item>
    <Dropdown.Item>
      <nobr>It's like a jungle sometimes It makes me wonder how I keep from goin' under</nobr>
    </Dropdown.Item>
    <Dropdown.Item>
      <nobr>It makes me wonder how I keep from goin' under</nobr>
    </Dropdown.Item>
    <Dropdown.Item>
      <nobr>-- Grandmaster Flash</nobr>
    </Dropdown.Item>
  </Dropdown>
</Wrapper>;
```

Dropdown with `preventOutOfBounds=false`:

```jsx
<Dropdown label="Don't push me" preventOutOfBounds={false}>
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

Dropdown panel height is limited to 320px by default:

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
  <Dropdown.Item onSelect={() => alert('Clicked 1')}>
    <nobr>...cause I'm close to the edge</nobr>
  </Dropdown.Item>
  <Dropdown.Item onSelect={() => alert('Clicked 2')}>
    <nobr>I'm trying not to lose my head</nobr>
  </Dropdown.Item>
  <Dropdown.Item onSelect={() => alert('Clicked 3')}>
    <nobr>It's like a jungle sometimes</nobr>
  </Dropdown.Item>
  <Dropdown.Item onSelect={() => alert('Clicked 4')}>
    <nobr>It makes me wonder how I keep from goin' under</nobr>
  </Dropdown.Item>
  <Dropdown.Item onSelect={() => alert("Don't push me")}>
    <nobr>-- Grandmaster Flash</nobr>
  </Dropdown.Item>
</Dropdown>
```

Dropdown with a very long label (also try holding a cursor on it to see a tooltip):

```jsx
<div style={{ width: '240px' }}>
  <Dropdown label="Don't push me cause I'm close to the edge, I'm trying not to lose my head">
    <Dropdown.Item onSelect={() => alert('Clicked 3')}>
      <nobr>It's like a jungle sometimes</nobr>
    </Dropdown.Item>
    <Dropdown.Item onSelect={() => alert('Clicked 4')}>
      <nobr>It makes me wonder how I keep from goin' under</nobr>
    </Dropdown.Item>
    <Dropdown.Item onSelect={() => alert("Don't push me")}>
      <nobr>-- Grandmaster Flash</nobr>
    </Dropdown.Item>
  </Dropdown>
</div>
```

Dropdown with `search` ability (note, you should provide `onSearch` handler):

```jsx
const ITEMS = [
  "...cause I'm close to the edge I'm trying not to lose my head",
  "I'm trying not to lose my head",
  "It's like a jungle sometimes It makes me wonder how I keep from goin' under",
  "It makes me wonder how I keep from goin' under",
  '-- Grandmaster Flash',
];
class Example extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      selected: null,
      items: ITEMS,
    };
  }

  handleSearch(value = '') {
    this.setState({
      items: value
        ? ITEMS.filter(item => item.toLowerCase().indexOf(value.toLowerCase()) >= 0)
        : ITEMS,
    });
  }

  render() {
    return (
      <Dropdown
        label={this.state.selected || "Don't push me..."}
        search
        onSearch={this.handleSearch}
        placeholder="Type to search..."
      >
        {this.state.items.map(item => (
          <Dropdown.Item value={item} key={item} onSelect={selected => this.setState({ selected })}>
            <nobr>{item}</nobr>
          </Dropdown.Item>
        ))}
        {this.state.items.length === 0 && <p align="center">Nothing found</p>}
      </Dropdown>
    );
  }
}
<Example />;
```
