import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px 10px;
  border: solid 1px ${p => (p.disabled ? p.theme.disabled : p.theme.grey03)};
  border-radius: ${p => p.theme.borderRadius};
  outline: none;
  color: ${p => (p.disabled ? p.theme.grey04 : p.theme.grey01)};
  font-size: 16px;
  text-overflow: ellipsis;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'text')};

  ::placeholder {
    color: ${p => (p.disabled ? p.theme.grey04 : p.theme.grey03)};
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
