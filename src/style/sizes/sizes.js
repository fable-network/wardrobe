import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  width: 100%;
  > * + * {
    margin-top: 8px;
  }
  & + & {
    margin-top: 16px;
  }
`;

const Heading = styled.h4`
  margin: 0;
`;

const Code = styled.pre`
  display: block;
  width: 100%;
  padding: 8px;
  background: ${p => p.theme.light};
`;

const SizeExample = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.warning};
  ${p => p.size};
  &:before {
    content: '';
    display: block;
    position: relative;
    background-color: ${p => p.theme.dark};
    width: 64px;
    height: 64px;
    max-height: 100%;
    max-width: 100%;
  }
`;

const Sizes = ({ name, value }) => (
  <Wrapper>
    <Heading>{name}</Heading>
    <SizeExample size={value} />
    <Code>({value})</Code>
  </Wrapper>
);

Sizes.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

export default Sizes;
