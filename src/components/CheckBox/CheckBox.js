import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';

const getBackground = ({ disabled, checked, theme }) => {
  if (disabled) return checked || checked === null ? theme.grey06 : theme.grey06;
  return checked || checked === null ? theme.primary : theme.white;
};

const getColor = ({ disabled, checked, theme }) => {
  if (!checked) return 'transparent';
  return disabled ? theme.grey03 : theme.white;
};

const Wrapper = styled('span')`
  pointer-events: ${p => (p.disabled ? 'none' : 'initial')};
  cursor: pointer;
  line-height: 1;
  display: inline-flex;
  align-items: center;
`;

const Input = styled(({ disabled, checked, ...otherProps }) => <span {...otherProps} />)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 1em;
  height: 1em;
  border-radius: ${p => p.theme.borderRadius};
  box-shadow: 0px 0px 0px 1px ${p => p.theme.grey04};
  background: ${getBackground};
  border: solid 0.05em #fff;
  box-sizing: border-box;
  transition: background 0.3s ease-out;
  color: ${getColor};
  fill: none;
`;

const Label = styled(({ disabled, ...otherProps }) => <span {...otherProps} />)`
  display: inline-block;
  margin-left: 8px;
  user-select: none;
  opacity: ${p => (p.disabled ? '0.5' : 'initial')};
`;

const InputWrapper = styled('span')`
  display: flex;
  align-items: center;
`;

const CheckBox = ({ label, checked, disabled, onToggle, ...otherProps }) => (
  <Wrapper {...otherProps} onClick={onToggle} disabled={disabled}>
    <InputWrapper>
      <Input checked={checked} disabled={disabled}>
        <Icon name="check" width="0.5em" height="0.5em" />
      </Input>
    </InputWrapper>
    <Label disabled={disabled}>{label}</Label>
  </Wrapper>
);

CheckBox.defaultProps = {
  onToggle: () => null,
};

CheckBox.propTypes = {
  onToggle: PropTypes.func,
  label: PropTypes.node,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

export default CheckBox;
