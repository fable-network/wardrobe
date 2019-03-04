import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stack from '../../layout/Stack';

const StackHorizontal = props => <Stack direction="horizontal" size="large" {...props} />;

const Wrapper = styled(StackHorizontal)`
  padding: 1rem 0;
`;

const Buttons = styled(StackHorizontal)`
  margin-left: auto;
`;

const SummaryBar = ({ buttons, children }) => (
  <Wrapper>
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
