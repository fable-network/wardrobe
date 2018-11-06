import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Table from '../../components/Table';
import Button from '../../components/Button';
import typography, * as typeConsts from '../../theme/typography';

const font = css`
  font-size: ${p => p.fontSize};
  line-height: ${p => p.lineHeight};
`;

const TableCellTypeSample = styled(Table.Cell)``;

const TableRowTypes = styled(Table.Row)`
  margin-top: 2em;
  &:first-child {
    margin-top: 0;
  }
  > ${TableCellTypeSample} {
    ${font};
    color: ${p => p.theme.darkest};
    min-width: 400px;
    flex-basis: 400px;
  }
`;

const TableRowControls = styled(Table.Row)`
  > div {
    flex-grow: 0;
  }
  & + & {
    margin-top: 2em;
  }
`;

const OneLine = styled(({ fontSize, lineHeight, ...otherProps }) => <Button {...otherProps} />)`
  ${font};
`;

const MultiLine = styled.textarea`
  ${font};
  margin: 0 8px;
  width: 160px;
  display: block;
`;

const TableCellControlSample = styled(Table.Cell)`
  width: 200px;
  flex-basis: 200px;
  flex-shrink: 0;
`;

const Hint = styled.span`
  color: ${p => p.theme.dark};
`;

export const Typography = ({ name, children }) => {
  const fontSize = typography[`fontSize${name}`];
  const lineHeight = typography[`lineHeight${name}`];
  const fontSizeNumber = typeConsts[`FONT_SIZE_${name.toUpperCase()}`];
  const lineHeightNumber = typeConsts[`LINE_HEIGHT_${name.toUpperCase()}`];
  const lineHeightRatio = Math.round((100 * lineHeightNumber) / fontSizeNumber) / 100;

  return (
    <TableRowTypes fontSize={fontSize} lineHeight={lineHeight}>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>
        {fontSizeNumber}px / {lineHeightNumber}px
        <br />
        <Hint>
          ({fontSize} / {lineHeightRatio})
        </Hint>
      </Table.Cell>
      <TableCellTypeSample>{children}</TableCellTypeSample>
    </TableRowTypes>
  );
};
Typography.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string,
};

export const ControlTypography = ({ name }) => {
  const fontSize = typography[`fontSize${name}`];
  const lineHeight = typography[`lineHeightControl${name}`];
  const fontSizeNumber = typeConsts[`FONT_SIZE_${name.toUpperCase()}`];
  const lineHeightNumber = typeConsts[`LINE_HEIGHT_CONTROL_${name.toUpperCase()}`];
  const lineHeightRatio = Math.round((100 * lineHeightNumber) / fontSizeNumber) / 100;
  return (
    <TableRowControls>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>
        {fontSizeNumber}px / {lineHeightNumber}px
        <br />
        <Hint>
          ({fontSize} / {lineHeightRatio})
        </Hint>
      </Table.Cell>
      <TableCellControlSample>
        <OneLine fontSize={fontSize} lineHeight={lineHeight}>
          One&nbsp;line
        </OneLine>
      </TableCellControlSample>
      <TableCellControlSample>
        <MultiLine
          fontSize={fontSize}
          lineHeight={lineHeight}
          value={'Multi line\ncontrol sample'}
          readOnly
        />
      </TableCellControlSample>
    </TableRowControls>
  );
};
ControlTypography.propTypes = {
  name: PropTypes.string.isRequired,
};
