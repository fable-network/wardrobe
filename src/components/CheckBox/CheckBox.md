Unchecked:
```jsx
<CheckBox label="Checkbox Label" />
```

Checked:
```jsx
<CheckBox label="Checkbox Label" checked />
```

Disabled:
```jsx
<CheckBox label="Checkbox Label" disabled />
```

Larger parent font-size (`20px`):
```jsx
<span style={{ fontSize: '20px'}}>
  <CheckBox label="Checkbox Label" checked/>
</span>
```

Interactable example:
```jsx
class CheckBoxExample extends React.Component {
  constructor() {
    super();
    this.handleToggle = this.handleToggle.bind(this);
    this.state = { checked: false };
  }

  handleToggle() {
    this.setState(({ checked }) => ({ checked: !checked }));
  }

  render() {
    const { checked } = this.state;
    const label = checked ? "Unselect me" : "Select me";

    return (
      <div style={{ fontSize: '18px'}}>
        <CheckBox label={label} onToggle={this.handleToggle} checked={checked}/>
      </div>
    );
  }
}
<CheckBoxExample />
```
