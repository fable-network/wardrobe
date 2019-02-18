import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Table from '../../components/Table';

const HeaderCell = styled(Table.Cell)`
  font-weight: 500;
  width: 12em;
`;
const CodeCell = styled(Table.Cell)`
  white-space: nowrap;
`;

const Media = ({ name, value }) => (
  <Table.Row>
    <HeaderCell>{name}</HeaderCell>
    <CodeCell style={{ fontFamily: 'monospace' }}>
      {value.join('').replace('{;}', '')}
    </CodeCell>
  </Table.Row>
);

Media.propTypes = {
  name: PropTypes.string,
  value: PropTypes.array,
};

export default Media;
