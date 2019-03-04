import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ellipsis = `
  overflow: hidden;
  white-space: nowrap;  
  text-overflow: ellipsis;
`;

const Label = styled.div`
  ${ellipsis};
  max-width: 100%;
  font-weight: ${p => p.theme.fontWeightBold};
`;

const Content = styled.div`
  ${ellipsis};
  max-width: 100%;
  font-size: ${p => p.theme.fontSizeLarge};
  line-height: ${p => p.theme.lineHeightLarge};
  color: ${p => p.theme.grey02};
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;

  font-family: inherit;
  font-weight: ${p => p.theme.fontWeightNormal};
  font-size: ${p => p.theme.fontSizeSmall};
  line-height: ${p => p.theme.lineHeightSmall};
`;

const DisplayValue = ({ label, children, ...otherProps }) => (
  <Wrapper {...otherProps}>
    <Label>{label}</Label>
    <Content>{children}</Content>
  </Wrapper>
);

DisplayValue.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default DisplayValue;
