**Default icon display**

```jsx
<Icon name="caret-down" />
```

**Custom color (orange) set on the Icon itself**

```jsx
<Icon name="caret-down" fill="orange" />
```

**Custom color (green) set by the `fill` attribute on a parent element**

```jsx
<div style={{ fill: 'green' }}>
  <Icon name="caret-down" />
</div>
```

**width / height**

When using a custom size, the aspect ratio of the icon is preserved.
Whitespace will be added to create the desired width and height.

Custom size (100x20px), background color set to `khaki` to outline the SVG:

```jsx
<Icon name="caret-down" width="100" height="20" style={{ background: 'khaki', fill: 'navy' }} />
```

```jsx
<Icon name="caret-down" width="20" height="50" style={{ background: 'khaki', fill: 'navy' }} />
```

**All icons**

```jsx
<Grid>
  {iconsList.map(icon => (
    <Grid.Cell columns={3} key={icon}>
      <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
        <Stack>
          <div style={{ margin: '16px', background: '#f0f0f0' }}>
            <Icon name={icon} width={32} height={32} />
          </div>
          <div>{icon}</div>
        </Stack>
      </div>
    </Grid.Cell>
  ))}
</Grid>
```
