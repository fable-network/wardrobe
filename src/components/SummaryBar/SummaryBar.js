import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stack from '../../layout/Stack';

const StackHorizontal = props => <Stack direction="horizontal" size="large" {...props} />;

const Wrapper = styled(StackHorizontal)`
  padding: 1rem 0;
  max-width: 100%;
  > * {
    flex-grow: 0;
    flex-shrink: 1;
  }
`;

const Buttons = styled(StackHorizontal)`
  margin-left: auto;
  padding-left: ${p => p.theme.stackMarginLarge};
`;

const SummaryBar = ({ buttons, children, ...otherProps }) => (
  <Wrapper {...otherProps}>
    {children}
    {Boolean(buttons) && <Buttons>{buttons}</Buttons>}
  </Wrapper>
);

SummaryBar.defaultProps = {};

SummaryBar.propTypes = {
  children: PropTypes.node,
  buttons: PropTypes.node,
};

export default SummaryBar;
