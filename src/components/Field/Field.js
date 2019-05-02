import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import WithLabel from '../WithLabel';
import Box from '../../layout/Box/Box';

const LabelAndInput = styled(WithLabel)`
  width: 100%;
  align-items: stretch;
`;

const nonCollapsingErrorCSS = css`
  &:empty:before {
    content: '\\a0';
  }
`;

const FieldError = styled.div`
  color: ${p => p.theme.danger};
  font-size: ${p => p.theme.fontSizeSmall};
  line-height: ${p => p.theme.lineHeightSmall};
  ${p => p.reserveSpaceForError && nonCollapsingErrorCSS};
`;

const Field = ({ label, renderInput, errorMessage, reserveSpaceForError, ...otherProps }) => (
  <Box stack="S">
    <LabelAndInput label={label} stack="S" {...otherProps}>
      {renderInput(otherProps)}
    </LabelAndInput>
    {(reserveSpaceForError || errorMessage) && (
      <FieldError reserveSpaceForError={reserveSpaceForError}>{errorMessage}</FieldError>
    )}
  </Box>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  renderInput: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  reserveSpaceForError: PropTypes.bool,
};

Field.defaultProps = {
  errorMessage: '',
  reserveSpaceForError: true,
};

export default Field;
