import colors from './colors';
import decorations from './decorations';
import media from './media';
import sizes from './sizes';
import typography from './typography';

// Available as 'props.theme' in styled-components.

// Try not to use nested variables. The name of the key should indicate what kind of item it is.
// Using props.theme.primary is a bit nicer then props.theme.colors.skyBlue

export default {
  ...colors,
  ...decorations,
  ...media,
  ...sizes,
  ...typography,
};
