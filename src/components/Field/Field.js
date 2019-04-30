import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WithLabel from 'components/WithLabel';

const StyledField = styled(WithLabel)`
  width: 100%;
  align-items: stretch;
`;

const Field = ({ label, input, ...otherProps }) => (
  <StyledField label={label} stack="S" {...otherProps}>
    {input(otherProps)}
  </StyledField>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.func.isRequired,
};

export default Field;
