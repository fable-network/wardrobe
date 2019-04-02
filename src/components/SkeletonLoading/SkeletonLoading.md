Header Loading:

```jsx
<SkeletonLoading shape="header" />
```

Text Loading:

```jsx
<SkeletonLoading shape="text" />
```

Square Loading:

```jsx
<SkeletonLoading width="200px" shape="square" />
```

Circle Loading:

```jsx
<SkeletonLoading width="200px" shape="circle" />
```

No shape (custom width and height):

```jsx
<SkeletonLoading width="50%" height="100px" />
```

Custom animation color:

```jsx
<SkeletonLoading color="cyan" shape="text" />
```

Custom base color:

```jsx
<SkeletonLoading baseColor="#333" shape="text" />
```

Without animation:

```jsx
<SkeletonLoading animating={false} shape="header" />
```

Real world examples:

- Profile card:

```jsx
<div
  style={{
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
    padding: '16px',
    width: '400px',
    maxWidth: '100%',
  }}
>
  <div style={{ marginRight: '16px' }}>
    <SkeletonLoading shape="circle" width="100px" />
  </div>
  <div style={{ width: '100%' }}>
    <div style={{ marginBottom: '8px' }}>
      <SkeletonLoading shape="header" width="100%" />
    </div>
    <div style={{ marginBottom: '8px' }}>
      <SkeletonLoading shape="text" width="70%" />
    </div>
    <SkeletonLoading shape="text" width="60%" />
  </div>
</div>
```

- Table with header:

```jsx
<div
  style={{
    boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
    padding: '16px',
    width: '600px',
    maxWidth: '100%',
  }}
>
  <div
    style={{ display: 'flex', justifyContent: 'space-between', width: '70%', marginBottom: '24px' }}
  >
    <SkeletonLoading shape="text" width="150px" />
    <SkeletonLoading shape="text" width="150px" />
  </div>
  <div style={{ marginBottom: '16px' }}>
    <SkeletonLoading animating={false} height="32px" />
  </div>
  <div style={{ marginBottom: '16px' }}>
    <SkeletonLoading shape="text" />
  </div>
  <SkeletonLoading shape="text" />
</div>
```
