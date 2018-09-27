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
    const label = isChecked ? "Yaay I'm selected" : "Select me";

    return (
      <CheckBox label={label} onToggle={this.handleToggle} isChecked={isChecked}/>
    );
  }
}
<CheckBoxExample />
```
