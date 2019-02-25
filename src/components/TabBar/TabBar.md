Normal:

```jsx
<TabBar>
  <TabBar.Item value="overview">Proposal overview</TabBar.Item>
  <TabBar.Item value="analytics">Analytics</TabBar.Item>
</TabBar>
```

Large (console.log's selected value):

```jsx
<TabBar size="large" onSelect={console.log} defaultValue="analytics">
  <TabBar.Item value="overview">Proposal overview</TabBar.Item>
  <TabBar.Item value="analytics">Analytics</TabBar.Item>
</TabBar>
```

Aligned on the left:

```jsx
<TabBar align="left">
  <TabBar.Item value="overview">Proposal overview</TabBar.Item>
  <TabBar.Item value="analytics">Analytics</TabBar.Item>
</TabBar>
```
