export function hexToRgba(hex, alpha) {
  const regexSixDigitColor = '[0-9a-f]{6}';
  const regexThreeDigitColor = '[0-9a-f]{3}';
  const regexColorHexCode = new RegExp(`^#(${regexSixDigitColor}|${regexThreeDigitColor})$`, 'g');
  if (!regexColorHexCode.test(hex)) {
    throw new Error(
      `[Wardrobe/helpers/colors]: "hex" must be an rgb hex color string. Got: "${hex}"`
    );
  }
  const codes = hex.slice(1).toLowerCase();
  const isShort = hex.length === 4;
  const parts = isShort
    ? codes.split('').map(code => `${code}${code}`)
    : [codes.slice(0, 2), codes.slice(2, 4), codes.slice(4, 6)];
  const result = parts.reduce((acc, item) => `${acc}${parseInt(item, 16).toFixed(0)}, `, '');
  return `rgba(${result}${alpha})`;
}

export default {
  hexToRgba,
};
