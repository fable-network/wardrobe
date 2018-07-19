// Available as 'props.theme' in styled-components.

// Try not to use nested variables. The name of the key should indicate what kind of item it is.
// Using props.theme.skyBlue is a bit nicer then props.theme.colors.skyBlue

const fonts = {};

const colors = {
  ravenBlack: '#313233',
  stoneGrey: '#9B9B9B',
  pearlWhite: '#f7f8fa',
  skyBlue: '#5F9DC7',
  flameRed: '#e25454',
  limeGreen: '#aecc76',
  apricotOrange: '#f4a671',
};

const content = {};

// Flatten the sections!
export default {
  ...colors,
  ...content,
};
