// Font family
export const FONT_FAMILY = '"Avenir Next", Arial, "Helvetica Neue", Helvetica, sans-serif';

// Font sizes
export const FONT_SIZE_XSMALL = 12;
export const FONT_SIZE_SMALL = 14;
export const FONT_SIZE_BASE = 16;
export const FONT_SIZE_LARGE = 18;
export const FONT_SIZE_XLARGE = 20;
export const FONT_SIZE_XXLARGE = 24;
export const FONT_SIZE_XXXLARGE = 32;

// Line heights for text blocks
export const LINE_HEIGHT_XSMALL = 16;
export const LINE_HEIGHT_SMALL = 20;
export const LINE_HEIGHT_BASE = 24;
export const LINE_HEIGHT_LARGE = 26;
export const LINE_HEIGHT_XLARGE = 28;
export const LINE_HEIGHT_XXLARGE = 32;
export const LINE_HEIGHT_XXXLARGE = 40;

// Line heights for controls (inputs, buttons, etc.)
export const LINE_HEIGHT_CONTROL_XSMALL = 12;
export const LINE_HEIGHT_CONTROL_SMALL = 16;
export const LINE_HEIGHT_CONTROL_BASE = 20;
export const LINE_HEIGHT_CONTROL_LARGE = 24;

const typography = {
  fontFamily: FONT_FAMILY,
  fontWeightNormal: '400',
  fontWeightBold: '500',

  fontSizeXSmall: `${FONT_SIZE_XSMALL / FONT_SIZE_BASE}rem`,
  fontSizeSmall: `${FONT_SIZE_SMALL / FONT_SIZE_BASE}rem`,
  fontSizeBase: '1rem',
  fontSizeLarge: `${FONT_SIZE_LARGE / FONT_SIZE_BASE}rem`,
  fontSizeXLarge: `${FONT_SIZE_XLARGE / FONT_SIZE_BASE}rem`,
  fontSizeXXLarge: `${FONT_SIZE_XXLARGE / FONT_SIZE_BASE}rem`,
  fontSizeXXXLarge: `${FONT_SIZE_XXXLARGE / FONT_SIZE_BASE}rem`,

  lineHeightXSmall: `${LINE_HEIGHT_XSMALL / FONT_SIZE_XSMALL}`,
  lineHeightSmall: `${LINE_HEIGHT_SMALL / FONT_SIZE_SMALL}`,
  lineHeightBase: `${LINE_HEIGHT_BASE / FONT_SIZE_BASE}`,
  lineHeightLarge: `${LINE_HEIGHT_LARGE / FONT_SIZE_LARGE}`,
  lineHeightXLarge: `${LINE_HEIGHT_XLARGE / FONT_SIZE_XLARGE}`,
  lineHeightXXLarge: `${LINE_HEIGHT_XXLARGE / FONT_SIZE_XXLARGE}`,
  lineHeightXXXLarge: `${LINE_HEIGHT_XXXLARGE / FONT_SIZE_XXXLARGE}`,

  lineHeightControlXSmall: `${LINE_HEIGHT_CONTROL_XSMALL / FONT_SIZE_XSMALL}`,
  lineHeightControlSmall: `${LINE_HEIGHT_CONTROL_SMALL / FONT_SIZE_SMALL}`,
  lineHeightControlBase: `${LINE_HEIGHT_CONTROL_BASE / FONT_SIZE_BASE}`,
  lineHeightControlLarge: `${LINE_HEIGHT_CONTROL_LARGE / FONT_SIZE_LARGE}`,
};

export default typography;
