import { FONT_SIZE_BASE, FONT_SIZE_SMALL, FONT_SIZE_LARGE } from './typography';

// Layout
export const GRID_GUTTER_WIDTH = 32;

// Control paddings
export const PADDING_HORIZONTAL_LARGE = 32;
export const PADDING_HORIZONTAL_BASE = 16;
export const PADDING_HORIZONTAL_SMALL = 8;

export const PADDING_VERTICAL_SMALL = 6;
export const PADDING_VERTICAL_BASE = 8;
export const PADDING_VERTICAL_LARGE = 12;

/**
 * Available sizes aligned with our base grid and dependent on the base font size.
 */
const sizes = {
  // Layout (stay in pixels)
  gridGutterWidth: `${GRID_GUTTER_WIDTH / FONT_SIZE_BASE}rem`,
  containerMaxWidthTablet: '600px',
  containerMaxWidthDesktop: '896px',
  containerMaxWidthWide: '1200px',

  // Control paddings
  paddingHorizontalSmall: `${PADDING_HORIZONTAL_SMALL / FONT_SIZE_SMALL}em`,
  paddingHorizontalBase: `${PADDING_HORIZONTAL_BASE / FONT_SIZE_BASE}em`,
  paddingHorizontalLarge: `${PADDING_HORIZONTAL_LARGE / FONT_SIZE_LARGE}em`,

  paddingVerticalSmall: `${PADDING_VERTICAL_SMALL / FONT_SIZE_SMALL}em`,
  paddingVerticalBase: `${PADDING_VERTICAL_BASE / FONT_SIZE_BASE}em`,
  paddingVerticalLarge: `${PADDING_VERTICAL_LARGE / FONT_SIZE_LARGE}em`,

  // Stack margins
  stackMarginSmall: '.5rem',
  stackMarginBase: '1rem',
  stackMarginLarge: '1.5rem',
};

export default sizes;
