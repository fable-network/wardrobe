Unchecked:
```jsx
<CheckBox label="Checkbox Label" />
```

Checked:
```jsx
<CheckBox label="Checkbox Label" isChecked />
```

Disabled:
```jsx
<CheckBox label="Checkbox Label" isDisabled />
```

Larger parent font-size (`20px`):
```jsx
<span style={{ fontSize: '20px'}}>
  <CheckBox label="Checkbox Label" isChecked/>
</span>
```

Interactable example:
```jsx
class CheckBoxExample extends React.Component {
  constructor() {
    super();
    this.handleToggle = this.handleToggle.bind(this);
    this.state = { isChecked: false };
  }

  handleToggle() {
    this.setState(({ isChecked }) => ({ isChecked: !isChecked }));
  }

  render() {
    const { isChecked } = this.state;
    const label = isChecked ? "Unselect me" : "Select me";

    return (
      <div style={{ fontSize: '18px'}}>
        <CheckBox label={label} onToggle={this.handleToggle} isChecked={isChecked}/>
      </div>
    );
  }
}
<CheckBoxExample />
```
