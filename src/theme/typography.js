// Font sizes
export const FONT_SIZE_SMALL = 14;
export const FONT_SIZE_BASE = 16;
export const FONT_SIZE_LARGE = 18;

// Line heights for text blocks
export const LINE_HEIGHT_BASE = 24;
export const LINE_HEIGHT_SMALL = 20;
export const LINE_HEIGHT_LARGE = 28;

// Line heights for controls (inputs, buttons, etc.)
export const LINE_HEIGHT_CONTROL_SMALL = 16;
export const LINE_HEIGHT_CONTROL_BASE = 20;
export const LINE_HEIGHT_CONTROL_LARGE = 24;

const typography = {
  fontSizeSmall: `${FONT_SIZE_SMALL / FONT_SIZE_BASE}rem`,
  fontSizeBase: '1rem',
  fontSizeLarge: `${FONT_SIZE_LARGE / FONT_SIZE_BASE}rem`,

  lineHeightSmall: `${LINE_HEIGHT_SMALL / FONT_SIZE_SMALL}`,
  lineHeightBase: `${LINE_HEIGHT_BASE / FONT_SIZE_BASE}`,
  lineHeightLarge: `${LINE_HEIGHT_LARGE / FONT_SIZE_LARGE}`,

  lineHeightControlSmall: `${LINE_HEIGHT_CONTROL_SMALL / FONT_SIZE_SMALL}`,
  lineHeightControlBase: `${LINE_HEIGHT_CONTROL_BASE / FONT_SIZE_BASE}`,
  lineHeightControlLarge: `${LINE_HEIGHT_CONTROL_LARGE / FONT_SIZE_LARGE}`,
};

export default typography;
