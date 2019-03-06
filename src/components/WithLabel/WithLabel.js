import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Ellipsis = ({ ellipsis, ...otherProps }) => <div {...otherProps} />;
Ellipsis.propTypes = { ellipsis: PropTypes.bool };

const ellipsisCss = `
  overflow: hidden;
  white-space: nowrap;  
  text-overflow: ellipsis;
`;

const Label = styled(Ellipsis)`
  max-width: 100%;
  ${p => p.ellipsis && ellipsisCss};
  font-weight: ${p => p.theme.fontWeightBold};
  color: ${p => p.theme.grey01};
`;

const Content = styled(Ellipsis)`
  ${p => p.ellipsis && ellipsisCss};
  max-width: 100%;
  font-size: ${p => p.theme.fontSizeBase};
  line-height: ${p => p.theme.lineHeightBase};
  color: inherit;
`;

const Wrapper = styled(({ direction, ...otherProps }) => <div {...otherProps} />)`
  display: flex;
  flex-flow: ${p => (p.direction === 'vertical' ? 'column' : 'row')} nowrap;
  align-items: ${p => (p.direction === 'vertical' ? 'flex-start' : 'center')};
  justify-content: flex-start;

  ${p => p.direction === 'horizontal' && '> * { width: 50%; }'};

  font-family: inherit;
  font-weight: ${p => p.theme.fontWeightNormal};
  font-size: ${p => p.theme.fontSizeSmall};
  line-height: ${p => p.theme.lineHeightSmall};
  color: ${p => p.theme.grey02};
`;

const WithLabel = ({ direction, label, children, ...otherProps }) => (
  <Wrapper direction={direction} {...otherProps}>
    <Label>{label}</Label>
    <Content>{children}</Content>
  </Wrapper>
);

WithLabel.defaultProps = {
  direction: 'vertical',
  ellipsis: false,
};

WithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  ellipsis: PropTypes.bool,
};

export default WithLabel;
