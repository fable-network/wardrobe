import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { paddingHorizontal, paddingVertical } from '../../helpers/styled';

function getSize({ size, name }) {
  if (name.startsWith('paddingHorizontal')) {
    return paddingHorizontal(size);
  }
  if (name.startsWith('paddingVertical')) {
    return paddingVertical(size);
  }
  return '';
}

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

const Code = styled.span`
  padding: 4px;
  margin: 0 4px;
  background: ${p => p.theme.light};
`;

const SizeExample = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.warning};
  ${getSize};
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
    <Heading>
      {name} (<Code>{value}</Code>)
    </Heading>
    <SizeExample size={value} name={name} />
  </Wrapper>
);

Sizes.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

export default Sizes;
