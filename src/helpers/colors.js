export function withAlpha(rgbHex, alpha) {
  // Test for a three-digit or a four-digit colour
  const regex = /^#([0-9a-f]{6}|[0-9a-f]{3})$/g;
  if (!regex.test(rgbHex)) {
    throw new Error(
      `[Wardrobe/helpers/colors]: "rgbHex" must be an rgb hex color string. Got: "${rgbHex}"`
    );
  }
  const codes = rgbHex.slice(1).toLowerCase();
  const isShort = rgbHex.length === 4;
  const parts = isShort
    ? codes.split('')
    : [codes.slice(0, 2), codes.slice(2, 4), codes.slice(4, 6)];
  const result = parts.reduce((acc, item) => `${acc}${parseInt(item, 16).toFixed(0)}, `, 'rgba(');
  return `${result}${alpha})`;
}

export default {
  withAlpha,
};
