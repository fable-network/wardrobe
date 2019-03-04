import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stack from '../../layout/Stack';

const SummaryBarSection = React.Fragment;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${p => p.theme.desktop_up`
    flex-direction: row;
  `};
`;

const createArray = count => {
  const array = new Array(count);
  for (let i = 0; i < count; i += 1) array[i] = i;
  return array;
};

const Content = styled(({ cols, ...otherProps }) => <div {...otherProps} />)`
  display: grid;
  grid-template-columns: ${p =>
    createArray(p.cols)
      .map(() => 'auto')
      .join(' ')};
  > :not(:last-child) {
    margin-right: ${p => p.theme.stackMarginLarge};
  }
`;

const Buttons = styled(Stack)`
  justify-content: center;
  margin-top: ${p => p.theme.stackMarginLarge};
  ${p => p.theme.desktop_up`
    justify-content: flex-start;
    margin-top: 0;
    margin-left: auto;
    padding-left: ${p.theme.stackMarginLarge};
  `};
`;

const childrenMaxColsReducer = (max, item) =>
  item.type === SummaryBarSection && item.props.children && item.props.children.length > max
    ? item.props.children.length
    : max;

const mapChildren = children => children;
//   React.Children.map(children, child => React.cloneElement(child, { key: this.props.innerKey }));

const SummaryBar = ({ buttons, children, ...otherProps }) => {
  const maxCols = Array.isArray(children) ? children.reduce(childrenMaxColsReducer, 1) : 1;
  return (
    <Wrapper {...otherProps}>
      <Content cols={maxCols}>{mapChildren(children, maxCols)}</Content>
      {Boolean(buttons) && (
        <Buttons direction="horizontal" size="large">
          {buttons}
        </Buttons>
      )}
    </Wrapper>
  );
};

SummaryBar.defaultProps = {
  children: [],
};

SummaryBar.propTypes = {
  children: PropTypes.node,
  buttons: PropTypes.node,
};

SummaryBar.Section = SummaryBarSection;

/** @component */
export default SummaryBar;
