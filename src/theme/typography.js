export const FONT_SIZE_BASE = 16;
export const LINE_HEIGHT_BASE = 24;
export const FONT_SIZE_SMALL = 14;
export const LINE_HEIGHT_SMALL = 20;
export const FONT_SIZE_LARGE = 18;
export const LINE_HEIGHT_LARGE = 28;

const typography = {
  fontSizeBase: 'font-size: 1rem;',
  lineHeightBase: `line-height: ${LINE_HEIGHT_BASE / FONT_SIZE_BASE};`,
  fontSmall: `font-size: ${FONT_SIZE_SMALL / FONT_SIZE_BASE}rem;`,
  lineHeightSmall: `line-height: ${LINE_HEIGHT_SMALL / FONT_SIZE_SMALL};`,
  fontLarge: `font-size: ${FONT_SIZE_LARGE / FONT_SIZE_BASE}rem;`,
  lineHeightLarge: `line-height: ${LINE_HEIGHT_LARGE / FONT_SIZE_LARGE};`,
};

export default typography;
