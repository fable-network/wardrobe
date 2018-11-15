import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import snakeCase from 'lodash/snakeCase';
import Table from '../../components/Table';
import { paddingHorizontal, paddingVertical } from '../../helpers/styled';
import * as sizes from '../../theme/sizes';

function getSize({ size, name }) {
  if (name.startsWith('paddingHorizontal')) {
    return paddingHorizontal(size);
  }
  if (name.startsWith('paddingVertical')) {
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
  const valueString = value.endsWith('em') && !value.endsWith('rem') ? `${parseFloat(value).toFixed(2)}em` : value;
  const pxValueString = (value.endsWith('em') && sizes[snakeCase(name).toUpperCase()]) || '';
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
