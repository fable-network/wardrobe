import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const rulerHorizontal = css`
  height: 1px;
  width: 100%;
`;
const rulerVertical = css`
  width: 2px;
  min-width: 2px;
  align-self: stretch;
`;

const Ruler = styled(({ direction, ...otherProps }) => <div {...otherProps} />)`
  display: block;
  background-color: ${p => p.theme.ruler};
  ${p => (p.direction === 'horizontal' ? rulerHorizontal : rulerVertical)};
`;

Ruler.defaultProps = {
  direction: 'horizontal',
};

Ruler.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
};

/** @component */
export default Ruler;
