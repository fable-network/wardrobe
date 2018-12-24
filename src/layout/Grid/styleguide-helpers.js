import React from 'react';
import PropTypes from 'prop-types';
import Grid from './Grid';

export const Content = ({ index }) => (
  <div
    style={{
      backgroundColor: `#${index % 3 === 0 ? 'f' : 'c'}${index % 3 === 1 ? 'f' : 'c'}${
        index % 3 === 2 ? 'f' : 'c'
      }`,
      padding: '8px',
      height: '24px',
      marginTop: '8px',
      marginBottom: '8px',
      textAlign: 'center',
    }}
  />
);
Content.propTypes = { index: PropTypes.number };

export const renderCells = (count, { mobile, tablet, desktop, wide } = {}) => {
  const array = new Array(count);
  for (let i = 0; i < count; i += 1) array[i] = i;
  return array.map(index => (
    <Grid.Cell key={index} mobile={mobile} tablet={tablet} desktop={desktop} wide={wide}>
      <Content index={index} />
    </Grid.Cell>
  ));
};
