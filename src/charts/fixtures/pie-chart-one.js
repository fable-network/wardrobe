export const data = [
  {
    name: 'Christmas',
    price: 'EUR 5.282,90',
    y: 10,
  },
];

export const colors = [
  '#6F94AE',
];

export const tooltip = (point) => `
    <div style="color: #333333; font-size: 14px; font-weight: 500; padding-bottom: 18px;">
      ${point.name}
    </div>
    <br />
    <div style="height: 18px; width: 10px" />
    <br />
    <div style="color: #4a4a4a; font-size: 12px;">
    <br />
    Total ............. ${point.price}
    <br />
    Percentage .... ${point.percentage.toFixed(2)}%
    <br />
    Quantity ........ ${point.y}
    </div>
`;
