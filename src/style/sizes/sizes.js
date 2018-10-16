import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sizes from '../../theme/sizes';

const propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

const Wrapper = styled.div`
  margin-right: ${p => p.theme.s24};
`;

const Heading = styled.h5`
  > small {
    font-weight: normal;
  }
`;

const SizeExample = styled.div`
  background-color: ${p => p.theme.ravenBlack};
  width: ${p => p.size};
  height: ${p => p.size};
`;

const MarginExample = styled.div`
  display: inline-flex;
  flew-flow: row nowrap;
  background-color: ${p => p.theme.apricotOrange};
  > ${SizeExample} + ${SizeExample} {
    margin-left: ${p => p.size};
  }
`;

const PaddingExample = styled.div`
  display: inline-block;
  background-color: ${p => p.theme.apricotOrange};
  padding: ${p => p.size};
  &::before {
    content: "";
    display: block;
    background-color: ${p => p.theme.ravenBlack};
    width: ${p => p.theme.s16};
    height: ${p => p.theme.s16};
  }
`;

const Sizes = ({ name, value }) => (
  <Wrapper>
    <Heading>
      {name} <small>({value})</small>
    </Heading>
    <SizeExample size={value} />
  </Wrapper>
);

Sizes.propTypes = propTypes;

Sizes.Margin = ({ name, value }) => (
  <Wrapper>
    <Heading>
      {name} <small>({value})</small>
    </Heading>
    <MarginExample size={value}>
      <SizeExample size={sizes.s64} />
      <SizeExample size={sizes.s64} />
    </MarginExample>
  </Wrapper>
);

Sizes.Margin.propTypes = propTypes;

Sizes.Padding = ({ name, value }) => (
  <Wrapper>
    <Heading>
      {name} <small>({value})</small>
    </Heading>
    <PaddingExample size={value} />
  </Wrapper>
);

Sizes.Padding.propTypes = propTypes;

export default Sizes;
