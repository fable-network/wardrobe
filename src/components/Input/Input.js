import React from 'react';
import styled, { css } from 'styled-components';
import { paddingHorizontal, paddingVertical } from '../../helpers/styled';

const cssInvalid = css`
  border-color: ${p => p.theme.danger};
  &:focus {
    border-color: ${p => p.theme.danger};
    box-shadow: 0 0 2px ${p => p.theme.danger} inset;
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  ${p => paddingHorizontal(`calc(${p.theme.paddingHorizontalSmall} - 1px)`)};
  ${p => paddingVertical(`calc(${p.theme.paddingVerticalBase} - 1px)`)};
  border: solid 1px ${p => (p.disabled ? p.theme.grey06 : p.theme.grey05)};
  border-radius: ${p => p.theme.borderRadius};
  background-color: ${p => (p.disabled ? p.theme.grey06 : p.theme.white)};
  outline: none;
  color: ${p => (p.disabled ? p.theme.grey03 : p.theme.grey01)};
  font-size: ${p => p.theme.fontSizeSmall};
  line-height: ${p => p.theme.lineHeightControlSmall};
  text-overflow: ellipsis;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'text')};

  ::placeholder {
    color: ${p => p.theme.grey03};
  }

  &:focus {
    transition: 0.2s linear;
    border-color: ${p => p.theme.primary};
    box-shadow: 0 0 2px ${p => p.theme.primary} inset;
  }

  ${p => p.invalid && cssInvalid};
`;

/**
 * Basic React `input` field with a bit of styling.
 */
const Input = props => <StyledInput {...props} />;

export default Input;
