import { FONT_SIZE_BASE, FONT_SIZE_SMALL, FONT_SIZE_LARGE } from './typography';

const PADDING_HORIZONTAL_LARGE = 32;
const PADDING_HORIZONTAL_BASE = 16;
const PADDING_HORIZONTAL_SMALL = 8;

const PADDING_VERTICAL_SMALL = 6;
const PADDING_VERTICAL_BASE = 8;
const PADDING_VERTICAL_LARGE = 12;

/**
 * Available sizes aligned with our base grid and dependent on the base font size.
 */
const sizes = {
  paddingHorizontalSmall: `${PADDING_HORIZONTAL_SMALL / FONT_SIZE_SMALL}em`,
  paddingHorizontalBase: `${PADDING_HORIZONTAL_BASE / FONT_SIZE_BASE}em`,
  paddingHorizontalLarge: `${PADDING_HORIZONTAL_LARGE / FONT_SIZE_LARGE}em`,

  paddingVerticalSmall: `${PADDING_VERTICAL_SMALL / FONT_SIZE_SMALL}em`,
  paddingVerticalBase: `${PADDING_VERTICAL_BASE / FONT_SIZE_BASE}em`,
  paddingVerticalLarge: `${PADDING_VERTICAL_LARGE / FONT_SIZE_LARGE}em`,
};

export default sizes;
