import { hexToRgba } from './colors';

describe('colors.hexToRgba', () => {
  it('throws if supplied color is in invalid format', () => {
    expect(() => hexToRgba('#1235', 0.5)).toThrow();
    expect(() => hexToRgba('#1235567', 0.5)).toThrow();
    expect(() => hexToRgba('1235', 0.5)).toThrow();
    expect(() => hexToRgba('abc', 0.5)).toThrow();
    expect(() => hexToRgba('#bcdefg', 0.5)).toThrow();
    expect(() => hexToRgba('#abcdef', 0.5)).not.toThrow();
    expect(() => hexToRgba('#012345', 0.5)).not.toThrow();
  });
  it('transforms 3-digit hex color to an rgba color', () => {
    const alpha = 0.5;
    expect(hexToRgba('#a05', alpha)).toBe('rgba(170, 0, 85, 0.5)');
    expect(hexToRgba('#fff', alpha)).toBe('rgba(255, 255, 255, 0.5)');
  });
  it('transforms 6-digit hex color to an rgba color', () => {
    const alpha = 0.5;
    expect(hexToRgba('#aa0155', alpha)).toBe('rgba(170, 1, 85, 0.5)');
    expect(hexToRgba('#a00050', alpha)).toBe('rgba(160, 0, 80, 0.5)');
    expect(hexToRgba('#ffffff', alpha)).toBe('rgba(255, 255, 255, 0.5)');
  });
});
