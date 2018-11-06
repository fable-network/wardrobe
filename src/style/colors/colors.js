import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import remark from 'remark';
import reactRenderer from 'remark-react';

const Wrapper = styled.div`
  margin: 0.5rem;
  box-shadow: ${p => p.theme.shadow};
  width: 240px;
`;

const StyledColor = styled.div`
  display: block;
  content: '';
  height: 5rem;
  background-color: ${props => props.theme[props.color]};
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

const Colors = ({ name, value, description }) => (
  <Wrapper>
    <StyledColor color={name} />
    <Description>
      <Title>{name}</Title>
      <Value>{value}</Value>
      {Boolean(description) && (
        <Text>
          <p>Use it for:</p>
          {
            remark()
              .use(reactRenderer)
              .processSync(description).contents
          }
        </Text>
      )}
    </Description>
  </Wrapper>
);

Colors.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
};

export default Colors;
