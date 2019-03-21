import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const restrictValue = (value, max) => Math.min(Math.max(0, value), max);

const getColor = ({ theme, appearance }) => {
  switch (appearance) {
    case 'danger':
      return theme.danger;
    case 'success':
      return theme.success;
    case 'warning':
      return theme.warning;
    case 'info':
      return theme.info;
    case 'primary':
    default:
      return theme.primaryActive;
  }
};

const ProgressBar = styled(({ max, value, appearance, hideBorder, ...otherProps }) => (
  <div {...otherProps} />
))`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  overflow: hidden;
  min-width: 240px;
  height: 0.25rem;
  border-radius: 0.125rem;
  background-color: ${p => p.theme.white};
  border: ${p => (p.hideBorder ? 'none' : `solid 1px ${getColor(p)}`)};

  &:before {
    background-color: ${getColor};
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: width;
    width: ${p => Math.round((100 * restrictValue(p.value, p.max)) / p.max)}%;
    transition: width 1s ease;
  }
`;

ProgressBar.propTypes = {
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  appearance: PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'info']),
  hideBorder: PropTypes.bool,
};

ProgressBar.defaultProps = {
  hideBorder: false,
  appearance: 'primary',
};

/**
 * @component
 */
export default ProgressBar;
