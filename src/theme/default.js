// Available as 'props.theme' in styled-components.

// Try not to use nested variables. The name of the key should indicate what kind of item it is.
// Using props.theme.skyBlue is a bit nicer then props.theme.colors.skyBlue

// TODO: Use more abstract names like colorPrimary, colorSecondary, colorWarning, colorError (?)
export const colors = {
  ravenBlack: '#313233',
  stoneGrey: '#9b9b9b',
  pearlWhite: '#f7f8fa',
  skyBlue: '#5f9dc7',
  flameRed: '#e25454',
  limeGreen: '#aecc76',
  apricotOrange: '#f4a671',
  white: '#ffffff',
};

export const outlines = {
  defaultShadow: '0 1px 4px #ccc',
  defaultBorder: `1px solid ${colors.stoneGrey}`,
  disabledBorder: '1px solid #ccc'
};

export default {
  ...colors,
  ...outlines
};
