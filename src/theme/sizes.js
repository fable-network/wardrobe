import { FONT_SIZE_BASE } from './typography';

const CONTROL_HEIGHT_SMALL = 28;
const CONTROL_HEIGHT_BASE = 36;

const PADDING_HORIZONTAL_LARGE = 32;
const PADDING_HORIZONTAL_BASE = 16;
const PADDING_HORIZONTAL_SMALL = 8;

const PADDING_VERTICAL_SMALL = 2;
const PADDING_VERTICAL_BASE = 4;
const PADDING_VERTICAL_LARGE = 8;

/**
 * Available sizes aligned with our base grid and dependent on the base font size.
 */
const sizes = {
  controlHeightSmall: `height: ${CONTROL_HEIGHT_SMALL / FONT_SIZE_BASE}em`,
  controlHeightBase: `height: ${CONTROL_HEIGHT_BASE / FONT_SIZE_BASE}em`,

  paddingHorizontalSmall: `
    padding-left: ${PADDING_HORIZONTAL_SMALL / FONT_SIZE_BASE}em;
    padding-right: ${PADDING_HORIZONTAL_SMALL / FONT_SIZE_BASE}em;
  `,
  paddingHorizontalBase: `
    padding-left: ${PADDING_HORIZONTAL_BASE / FONT_SIZE_BASE}em;
    padding-right: ${PADDING_HORIZONTAL_BASE / FONT_SIZE_BASE}em;
  `,
  paddingHorizontalLarge: `
    padding-left: ${PADDING_HORIZONTAL_LARGE / FONT_SIZE_BASE}em;
    padding-right: ${PADDING_HORIZONTAL_LARGE / FONT_SIZE_BASE}em;
  `,

  paddingVerticalSmall: `
    padding-top: ${PADDING_VERTICAL_SMALL / FONT_SIZE_BASE}em;
    padding-bottom: ${PADDING_VERTICAL_SMALL / FONT_SIZE_BASE}em;
  `,
  paddingVerticalBase: `
    padding-top: ${PADDING_VERTICAL_BASE / FONT_SIZE_BASE}em;
    padding-bottom: ${PADDING_VERTICAL_BASE / FONT_SIZE_BASE}em;
  `,
  paddingVerticalLarge: `
    padding-top: ${PADDING_VERTICAL_LARGE / FONT_SIZE_BASE}em;
    padding-bottom: ${PADDING_VERTICAL_LARGE / FONT_SIZE_BASE}em;
  `,
};

export default sizes;
