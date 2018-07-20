import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { pulseInfinite } from 'constants/Animation';

const BadgeWrapper = styled('span')`
  display: inline-block;
  padding: 0.15em 0.8em;
  font-size: 80%;
  color: ${props => props.color};
  border-radius: 20px;
  text-align: center;
  background: ${props => props.background};
  animation: ${props => (props.pulsating ? `${pulseInfinite} 3s infinite ease-in-out` : '')};
`;


//TODO: Will probably move this to sass file and have the class suffix add these values.
const getColors = (appearance, theme) => {
  switch(appearance) {
    case 'primary':
      return {
        textColor: '#FFF',
        backgroundColor: theme.skyBlue
      };
    case 'secondary':
      return {
        textColor: '#FFF',
        backgroundColor: theme.stoneGrey
      };
    case 'success':
      return {
        textColor: '#FFF',
        backgroundColor: theme.limeGreen
      };
    case 'danger':
      return {
        textColor: '#FFF',
        backgroundColor: theme.flameRed
      };
    case 'warning':
      return {
        textColor: '#FFF',
        backgroundColor: theme.apricotOrange
      };
    case 'light':
      return {
        textColor: theme.ravenBlack,
        backgroundColor: theme.pearlWhite
      };
    case 'dark':
      return {
        textColor: '#FFF',
        backgroundColor: theme.ravenBlack
      };
    default:
      return {
        textColor: '#FFF',
        backgroundColor: theme.skyBlue
      }
  }
};

const Badge = ({ appearance, children, pulsating, theme }) => {
  const { textColor, backgroundColor } = getColors(appearance, theme);
  return (
    <BadgeWrapper color={textColor} background={backgroundColor} pulsating={pulsating}>
      {children}
    </BadgeWrapper>
  );
};

Badge.propTypes = {
  appearance: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'light',
    'dark'
  ]),
  children: PropTypes.number,
  pulsating: PropTypes.bool,
  theme: PropTypes.object.isRequired
};

export default withTheme(Badge);
