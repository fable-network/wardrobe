import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import noop from '../../helpers/noop';

const Wrapper = styled('label')`
  position: relative;
  display: inline-flex;
  margin: 0;
  align-items: center;
  ${p => p.disabled && `opacity: 0.5;`};
`;

const StyledRadioInput = styled('div')`
  width: 0.776em;
  height: 0.776em;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 0.05em ${p => p.theme.grey03};
  background: transparent;
  border: solid 0.05em #fff;
  outline: none;
`;

const Label = styled('span')`
  margin-left: 0.5em;
`;

const RadioInput = styled('input').attrs({ type: 'radio' })`
  opacity: 0;
  left: 0;
  position: absolute;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
  width: 1em;
  height: 1em;
  &:checked {
    + ${StyledRadioInput} {
      box-shadow: 0px 0px 0px 0.05em ${p => p.theme.primary};
      background: ${p => p.theme.primary};
    }
  }
  &:focus {
    + ${StyledRadioInput} {
      box-shadow: 0 0 0.3em ${p => p.theme.primaryActive};
    }
  }
`;

const RadioButton = ({ label, selected, onSelect, name, ...props }) => (
  <Wrapper disabled={props.disabled}>
    <div>
      <RadioInput {...props} name={name} checked={selected} onClick={onSelect} />
      <StyledRadioInput />
    </div>
    {label && <Label>{label}</Label>}
  </Wrapper>
);

RadioButton.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  onSelect: PropTypes.func,
  name: PropTypes.string,
};

RadioButton.defaultProps = {
  onSelect: noop,
};

export default RadioButton;
