import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

const sizeToFont = {
  XS: 'XSmall',
  S: 'Small',
  M: 'Base',
  L: 'Large',
  XL: 'XLarge',
  XXL: 'XXLarge',
  XXXL: 'XXXLarge',
};

const Text = styled(({ size, bold, renderAs, children, ...otherProps }) =>
  React.createElement(renderAs, otherProps, children)
)`
  font-size: ${p => p.theme[`fontSize${sizeToFont[p.size]}`]};
  line-height: ${p => p.theme[`lineHeight${sizeToFont[p.size]}`]};
  font-weight: ${p => (p.bold ? p.theme.fontWeightBold : p.theme.fontWeightNormal)};
`;

Text.defaultProps = {
  size: 'M',
  bold: false,
  renderAs: 'p',
};

Text.propTypes = {
  size: (props, propName, componentName) => {
    const { size, bold } = props;
    if (!sizes.includes(size)) {
      return new Error(
        `Invalid size: ${size} supplied to ${componentName}. It should be one of ${sizes.join(
          ', '
        )}`
      );
    }
    if (['XL', 'XXL', 'XXXL'].includes(size) && !bold) {
      return new Error(
        `Invalid combination of props supplied to ${componentName}. ${size} can only be used with bold text`
      );
    }
    if (size === 'XS' && bold) {
      return new Error(
        `Invalid combination of props supplied to ${componentName}. ${size} can not be used with bold text`
      );
    }
    return undefined;
  },
  bold: PropTypes.bool,
  renderAs: PropTypes.string,
  children: PropTypes.node,
};

const Heading = ({ size, ...otherProps }) => <Text size={size} bold {...otherProps} />;
Heading.propTypes = {
  size: PropTypes.oneOf(sizes.filter(s => s !== 'XS')),
};

const H1 = props => <Heading renderAs="h1" size="XXXL" {...props} />;
const H2 = props => <Heading renderAs="h2" size="XXL" {...props} />;
const H3 = props => <Heading renderAs="h3" size="XL" {...props} />;
const H4 = props => <Heading renderAs="h4" size="L" {...props} />;
const H5 = props => <Heading renderAs="h5" size="M" {...props} />;
const H6 = props => <Heading renderAs="h6" size="S" {...props} />;

Text.H1 = H1;
Text.H2 = H2;
Text.H3 = H3;
Text.H4 = H4;
Text.H5 = H5;
Text.H6 = H6;

export default Text;
