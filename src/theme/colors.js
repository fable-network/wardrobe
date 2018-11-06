const colors = {
  grey01: '#333', // ravenBlack
  grey02: '#666',
  grey03: '#999', // stoneGrey
  grey04: '#cdcdcd',
  grey05: '#eee',
  white: '#ffffff', // white
  primary: '#5f9dc7', // skyBlue
  primaryActive: '#337aa9',
  backgroundPrimary: '#e7f1f7',
  backgroundSecondary: '#f7f8fa', // pearlWhite
  danger: '#e25454', // flameRed
  success: '#aecc76', // limeGreen
  warning: '#f4a671', // apricotOrange
};

export default colors;

export const usage = {
  [colors.grey01]: `
- titles,
- active menu points,
- summaries,
- info blocks,
- form labels.`,

  [colors.grey02]: `
- body text,
- inactive menu points.
  `,
  [colors.grey03]: `
- input field placeholder text,
- text in filters.
  `,
  [colors.grey04]: `
- disabled control background (primary button) or border (input, dropdown).
  `,
  [colors.grey05]: `
- control border (input, dropdown),
- hovered dropdown item.
  `,
  [colors.white]: `
- modal background,
- control background,
- primary CTA text.
  `,
  [colors.primary]: `
- main CTA,
- links,
- bottom border on active menu.
  `,
  [colors.primaryActive]: `
- primary CTA on hover.
  `,
  [colors.backgroundPrimary]: `
- CTA block background to highlight the main interaction on the page.
  `,
  [colors.backgroundSecondary]: `
- outside page background (not used space).
  `,
  [colors.danger]: `
- form fields' error message,
- toaster message with error background,
- any error icon / indicator.
  `,
  [colors.success]: `
- toaster message with success background,
- form fields' completed indicator,
- any other success icon / indicator.
  `,
  [colors.warning]: `
- toaster warning or info message background,
- any other warning icon / indicator.
  `,
};
