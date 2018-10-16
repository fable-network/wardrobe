import sizes from './sizes';
import colors from './colors';

// Available as 'props.theme' in styled-components.

// Try not to use nested variables. The name of the key should indicate what kind of item it is.
// Using props.theme.skyBlue is a bit nicer then props.theme.colors.skyBlue

export default {
  ...colors,
  ...sizes,
};
