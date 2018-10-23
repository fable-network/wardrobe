import React from 'react';
import styled from 'styled-components';
import { hexToRgba } from '../../helpers/colors';

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px 10px;
  border: solid 1px ${p => (p.disabled ? hexToRgba(p.theme.dark, 0.5) : p.theme.dark)};
  outline: none;
  color: ${p => (p.disabled ? hexToRgba(p.theme.dark, 0.5) : p.theme.darkest)};
  font-size: 16px;
  text-overflow: ellipsis;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'default')};

  ::placeholder {
    color: ${p => (p.disabled ? hexToRgba(p.theme.dark, 0.5) : p.theme.dark)};
  }

  &:focus {
    transition: 0.2s linear;
    border-color: ${p => p.theme.primary};
    box-shadow: 0 0 3px ${p => p.theme.primary};
  }

  ${p => p.invalid && `border-color: ${p.theme.danger}`};
`;

/**
 * Basic React `input` field with a bit of styling.
 */
const Input = props => <StyledInput {...props} />;

export default Input;
