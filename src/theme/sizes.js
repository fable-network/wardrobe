import { FONT_SIZE_BASE } from './typography';

const PADDING_HORIZONTAL_LARGE = 32;
const PADDING_HORIZONTAL_BASE = 16;
const PADDING_HORIZONTAL_SMALL = 8;

const PADDING_VERTICAL_SMALL = 5;
const PADDING_VERTICAL_BASE = 8;
const PADDING_VERTICAL_LARGE = 12;

/**
 * Available sizes aligned with our base grid and dependent on the base font size.
 */
const sizes = {
  paddingHorizontalSmall: `${PADDING_HORIZONTAL_SMALL / FONT_SIZE_BASE}em`,
  paddingHorizontalBase: `${PADDING_HORIZONTAL_BASE / FONT_SIZE_BASE}em`,
  paddingHorizontalLarge: `${PADDING_HORIZONTAL_LARGE / FONT_SIZE_BASE}em`,

  paddingVerticalSmall: `${PADDING_VERTICAL_SMALL / FONT_SIZE_BASE}em`,
  paddingVerticalBase: `${PADDING_VERTICAL_BASE / FONT_SIZE_BASE}em`,
  paddingVerticalLarge: `${PADDING_VERTICAL_LARGE / FONT_SIZE_BASE}em`,
};

export default sizes;
