Default (Uncontrolled):

```jsx
<RadioButton label="Radio label" />
```

Selected (Controlled):

```jsx
<RadioButton selected label="Radio label" />
```

Not selected (Controlled):

```jsx
<RadioButton selected={false} label="Radio label" />
```

Disabled:

```jsx
<RadioButton disabled label="Radio label" />
```

Radio button group (linked by the `name` prop):

```jsx
class Example extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { selectedOption: null };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    this.setState({ selectedOption: e.target.value });
  }

  render() {
    return (
      <>
        <p>
          <strong>Select an option:</strong>
        </p>
        <div>
          <RadioButton label="Option 1" name="someOption" value="1" onSelect={this.handleSelect} />
        </div>
        <div>
          <RadioButton label="Option 2" name="someOption" value="2" onSelect={this.handleSelect} />
        </div>
        <div>
          <RadioButton label="Option 3" name="someOption" value="3" onSelect={this.handleSelect} />
        </div>
        <pre>Selected Option: "{this.state.selectedOption}"</pre>
      </>
    );
  }
}
<Example />;
```
