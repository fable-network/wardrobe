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

Disabled and checked:

```jsx
<CheckBox label="Checkbox Label" disabled checked />
```

Larger parent font-size (`24px`):

```jsx
<span style={{ fontSize: '24px' }}>
  <CheckBox label="Checkbox Label" checked />
</span>
```

"Not sure" state (use `null` for `checked` prop):

```jsx
<CheckBox label="Checkbox Label" checked={null} />
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
    const label = checked ? 'Unselect me' : 'Select me';

    return (
      <div style={{ fontSize: '18px' }}>
        <CheckBox label={label} onToggle={this.handleToggle} checked={checked} />
      </div>
    );
  }
}
<CheckBoxExample />;
```
