import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WithLabel from 'components/WithLabel';

const StyledField = styled(WithLabel)`
  width: 100%;
  align-items: stretch;
`;

const Field = ({ label, renderInput, ...otherProps }) => (
  <StyledField label={label} stack="S" {...otherProps}>
    {renderInput(otherProps)}
  </StyledField>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  renderInput: PropTypes.func.isRequired,
};

export default Field;
