default appearance (`light`)

```jsx
  <Table>
    <Table.Header>
      <Table.Cell>Name</Table.Cell>
      <Table.Cell>Age</Table.Cell>
      <Table.Cell>Gender</Table.Cell>
      <Table.Cell>Address</Table.Cell>
      <Table.Cell>Phone Number</Table.Cell>
    </Table.Header>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
  </Table>
```

Appearance (`light`) with borders

```jsx
  <Table appearance="light" showBorders>
    <Table.Header>
      <Table.Cell>Name</Table.Cell>
      <Table.Cell>Age</Table.Cell>
      <Table.Cell>Gender</Table.Cell>
      <Table.Cell>Address</Table.Cell>
      <Table.Cell>Phone Number</Table.Cell>
    </Table.Header>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
  </Table>
```

Appearance (`dark`)

```jsx
  <Table appearance="dark">
    <Table.Header>
      <Table.Cell>Name</Table.Cell>
      <Table.Cell>Age</Table.Cell>
      <Table.Cell>Gender</Table.Cell>
      <Table.Cell>Address</Table.Cell>
      <Table.Cell>Phone Number</Table.Cell>
    </Table.Header>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
  </Table>
```

Appearance (`dark`) with borders

```jsx
  <Table appearance="dark" showBorders>
    <Table.Header>
      <Table.Cell>Name</Table.Cell>
      <Table.Cell>Age</Table.Cell>
      <Table.Cell>Gender</Table.Cell>
      <Table.Cell>Address</Table.Cell>
      <Table.Cell>Phone Number</Table.Cell>
    </Table.Header>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
  </Table>
```

Appearance (`light`) without alternating row colors

```jsx
  <Table appearance="light" alternatingRowColors={false}>
    <Table.Header>
      <Table.Cell>Name</Table.Cell>
      <Table.Cell>Age</Table.Cell>
      <Table.Cell>Gender</Table.Cell>
      <Table.Cell>Address</Table.Cell>
      <Table.Cell>Phone Number</Table.Cell>
    </Table.Header>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
  </Table>
```

Appearance (`dark`) without alternating row colors

```jsx
  <Table appearance="dark" alternatingRowColors={false}>
    <Table.Header>
      <Table.Cell>Name</Table.Cell>
      <Table.Cell>Age</Table.Cell>
      <Table.Cell>Gender</Table.Cell>
      <Table.Cell>Address</Table.Cell>
      <Table.Cell>Phone Number</Table.Cell>
    </Table.Header>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
  </Table>
```

Scrollable table (`min-width : 2200px`)

```jsx
  <Table appearance="light" minWidth="2200px">
    <Table.Header>
      <Table.Cell>Name</Table.Cell>
      <Table.Cell>Age</Table.Cell>
      <Table.Cell>Gender</Table.Cell>
      <Table.Cell>Address</Table.Cell>
      <Table.Cell>Phone Number</Table.Cell>
    </Table.Header>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Ali</Table.Cell>
      <Table.Cell>25</Table.Cell>
      <Table.Cell>Male</Table.Cell>
      <Table.Cell>Singel 542, 1017AZ, Amsterdam, NL</Table.Cell>
      <Table.Cell>0612376543</Table.Cell>
    </Table.Row>
  </Table>
```
