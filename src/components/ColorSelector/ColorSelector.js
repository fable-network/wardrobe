import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled('span')`
  display: inline-flex;
  align-items: center;
  cursor: ${(p) => (p.onClick ? 'pointer' : 'initial')};
`;

const fixedSizeCss = css`
  width: ${(p) => p.fixedSize};
  height: ${(p) => p.fixedSize};
`;

const missingColorCss = css`
  position: relative;

  &::after {
    position: absolute;
    content: "?";
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-weight: 500;
  }
`;

const selectedCss = css`
  transform: scale(1) !important;
`;

const ColorCircle = styled('span')`
  background-color: ${(p) => p.theme.white};
  border-radius: 100%;
  box-shadow: 0px 0px 0px 1px #cecece;
  border: 2px solid ${(p) => p.theme.white};
  transform: scale(.8);
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  transition: all .3s ease;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  &:hover {
    transform: scale(.9);
  }

  ${(p) => (p.fixedSize ? fixedSizeCss : 'padding: .75em;')}
  ${(p) => (p.isMissingColor ? missingColorCss : null)}
  ${(p) => (p.disableInteraction || p.selected ? selectedCss : null)}
  ${(p) => (
    p.patternImage
      ? `background-image: url(${p.patternImage})`
      : `background: ${p.color || p.theme.white}`
  )}
`;

const Text = styled('span')`
  margin-left: 8px;
  font-weight: ${(p) => (p.selected ? '500' : '400')};
`;

const ColorSelector = props => {
  const {
    onClick,
    patternImage,
    color,
    disableInteraction,
    text,
    selected,
    fixedSize,
    ...otherProps
  } = props;
  const isMissingColor = !patternImage && !color;

  return (
    <Wrapper {...otherProps} onClick={!disableInteraction ? onClick : null}>
      <ColorCircle
        color={color}
        selected={selected}
        fixedSize={fixedSize}
        patternImage={patternImage}
        isMissingColor={isMissingColor}
        disableInteraction={disableInteraction}
      />
      {text && <Text selected={selected}>{text}</Text>}
    </Wrapper>
  );
};

ColorSelector.defaultProps = {
  selected: false,
  disableInteraction: false,
};

ColorSelector.propTypes = {
  color: PropTypes.string,
  /** overrides color if available */
  patternImage: PropTypes.string,
  onClick: PropTypes.func,
  /** ignores click handler if true */
  disableInteraction: PropTypes.bool,
  text: PropTypes.string,
  selected: PropTypes.bool,
  /** overrides dynamic size based on font-size */
  fixedSize: PropTypes.string,
};

export default ColorSelector;
