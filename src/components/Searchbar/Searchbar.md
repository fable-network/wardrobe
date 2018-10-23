Default:
```jsx
<Searchbar />
```

Icon on the left
```jsx
<Searchbar iconPosition="left" />
```

Without an icon
```jsx
<Searchbar hideIcon />
```

Custom placeholder:
```jsx
<Searchbar placeholder="Search for dresses" />
```

Default value:
```jsx
<div><Searchbar defaultValue="Floral dress" /></div>
```

Loading (with left icon position):
```jsx
<Searchbar iconPosition="left" defaultValue="Floral dress" loading/>
```

Loading (with right icon position):
```jsx
<Searchbar iconPosition="right" defaultValue="Floral dress" loading/>
```

Truncated text:
```jsx
<div style={{ width: '150px'}}>
  <Searchbar iconPosition="left" defaultValue="You can't see all of me, but I'm there" />
</div>
```
