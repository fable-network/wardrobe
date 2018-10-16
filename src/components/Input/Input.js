import React from 'react';
import styled from 'styled-components';
import { hexToRgba } from '../../helpers/colors';

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px 10px;
  border: solid 1px ${p => (p.disabled ? hexToRgba(p.theme.stoneGrey, 0.5) : p.theme.stoneGrey)};
  outline: none;
  color: ${p => (p.disabled ? hexToRgba(p.theme.stoneGrey, 0.5) : p.theme.ravenBlack)};
  font-size: 16px;
  text-overflow: ellipsis;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'default')};

  ::placeholder {
    color: ${p => (p.disabled ? hexToRgba(p.theme.stoneGrey, 0.5) : p.theme.stoneGrey)};
  }

  &:focus {
    transition: 0.2s linear;
    border-color: ${p => p.theme.skyBlue};
    box-shadow: 0 0 3px ${p => p.theme.skyBlue};
  }

  ${p => p.invalid && `border-color: ${p.theme.flameRed}`};
`;

/**
 * Basic React `input` field with a bit of styling.
 */
const Input = props => <StyledInput {...props} />;

export default Input;
