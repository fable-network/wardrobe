import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import snakeCase from 'lodash/snakeCase';
import Table from '../../components/Table';
import { paddingHorizontal, paddingVertical } from '../../helpers/styled';
import * as sizes from '../../theme/sizes';

const endsWith = (value, search) =>
  value.substring(value.length - search.length, value.length) === search;

const startsWith = (value, search) => value.substring(0, search.length) === search;

function getSize({ size, name }) {
  if (startsWith(name, 'paddingHorizontal')) {
    return paddingHorizontal(size);
  }
  if (startsWith(name, 'paddingVertical')) {
    return paddingVertical(size);
  }
  return '';
}

const SizeExample = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.warning};
  ${getSize};
  &:before {
    content: 'Example';
    display: block;
    position: relative;
    background-color: ${p => p.theme.grey03};
    color: white;
    text-align: center;
    width: 96px;
    font-size: ${p => p.theme.fontSizeBase};
    line-height: ${p => p.theme.lineHeightBase};
    height: ${p => p.theme.lineHeightBase};
    max-height: 100%;
    max-width: 100%;
  }
`;

const Sizes = ({ name, value }) => {
  const valueString = endsWith(value, 'em') && !endsWith(value, 'rem') ? `${parseFloat(value).toFixed(2)}em` : value;
  const pxValueString = (endsWith(value, 'em') && sizes[snakeCase(name).toUpperCase()]) || '';
  return (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>
        {valueString}
        {pxValueString && ` (${pxValueString}px)`}
      </Table.Cell>
      <Table.Cell>
        {Boolean(getSize({ size: value, name })) && <SizeExample size={value} name={name} />}
      </Table.Cell>
    </Table.Row>
  );
};

Sizes.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

export default Sizes;
