export const data = [
  {
    name: 'Christmas',
    price: 'EUR 5.282,90',
    y: 10,
  },
  {
    name: 'New Year',
    price: 'EUR 5.282,90',
    y: 20,
  },
  {
    name: 'Glitter',
    price: 'EUR 5.282,90',
    y: 30,
  },
  {
    name: 'Hip Hop',
    price: 'EUR 5.282,90',
    y: 40,
  },
  {
    name: 'Street',
    price: 'EUR 5.282,90',
    y: 50,
  },
  {
    name: 'Sunny',
    price: 'EUR 5.282,90',
    y: 60,
  },
  {
    name: 'Casual',
    price: 'EUR 5.282,90',
    y: 70,
  }
];

export const colors = [
  '#33556C',
  '#4C7B9B',
  '#6F94AE',
  '#DDEDF7',
  '#F7F7F7',
  '#C4E8E8',
  '#95C9CC'
];

export const tooltip = ({ point } = data) => `
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
