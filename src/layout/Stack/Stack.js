import PropTypes from 'prop-types';
import styled from 'styled-components';

const getMargin = ({ size, theme }) => {
  switch (size) {
    case 'small':
      return theme.stackMarginSmall;
    case 'large':
      return theme.stackMarginLarge;
    case 'normal':
    default:
      return theme.stackMarginBase;
  }
};

const Stack = styled.div`
  > * + * {
    margin-top: ${getMargin};
  }
`;

Stack.defaultProps = {
  size: 'normal',
};

Stack.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'large'])
};

/** @component */
export default Stack;
