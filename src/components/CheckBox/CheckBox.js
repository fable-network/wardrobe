import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled('span')`
  pointer-events: ${p => (p.disabled ? 'none' : 'initial')};
  opacity: ${p => (p.disabled ? '0.3' : 'initial')};
  cursor: pointer;
  line-height: 1;
  display: inline-flex;
  align-items: center;
`;

const Input = styled('span')`
  display: inline-block;
  position: relative;
  width: 0.8125em;
  height: 0.8125em;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 1px ${p => (p.checked ? p.theme.primary : p.theme.dark)};
  background: ${p => (p.checked ? p.theme.primary : 'transparent')};
  border: solid 0.05em #fff;
  box-sizing: border-box;
  transition: background 0.3s ease-out;
`;

const Label = styled('span')`
  display: inline-block;
  margin-left: 8px;
  user-select: none;
`;

const InputWrapper = styled('span')`
  display: flex;
  align-items: center;
`;

const CheckBox = ({ label, checked, disabled, onToggle, ...otherProps }) => (
  <Wrapper {...otherProps} onClick={onToggle} disabled={disabled}>
    <InputWrapper>
      <Input checked={checked} />
    </InputWrapper>
    <Label>{label}</Label>
  </Wrapper>
);

CheckBox.defaultProps = {
  onToggle: () => null,
};

CheckBox.propTypes = {
  onToggle: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

export default CheckBox;
