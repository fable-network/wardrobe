import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../theme/colors';

const Wrapper = styled.div`
  margin: 0.5rem;
  box-shadow: ${p => p.theme.shadow};
  flex: 0 0 240px;
  width: 240px;
`;

const StyledColor = styled.div`
  display: block;
  content: '';
  height: 5rem;
  background-color: ${p => p.theme[p.color]};
`;

const Description = styled.div`
  padding: 1rem;
`;

const Title = styled.p`
  color: ${p => p.theme.grey01};
  font-weight: 500;
  margin: 0;
`;

const Value = styled.span`
  font-family: monospace;
  color: ${p => p.theme.grey02};
`;

const Text = styled.div`
  margin-top: 1rem;
  color: ${p => p.theme.grey02};
  font-size: ${p => p.theme.fontSizeSmall};
  line-height: ${p => p.theme.lineHeightSmall};

  ul {
    padding: 0 0 0 1rem;
    li + li {
      margin-top: 0.5rem;
    }
  }
`;

const Colors = ({ name, children }) => (
  <Wrapper>
    <StyledColor color={name} />
    <Description>
      <Title>{name}</Title>
      <Value>{colors[name]}</Value>
      {Boolean(children) && <Text>{children}</Text>}
    </Description>
  </Wrapper>
);

Colors.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
};

export default Colors;
