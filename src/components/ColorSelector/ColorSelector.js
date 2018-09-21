import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ColorSelector.scss';

const ColorSelector = (props) => {
  const { onClick, patternImage, color, disableInteraction, text, selected, fixedSize } = props;
  const isMissingColor = !patternImage && !color;

  const wrapperClasses = classNames('ft--colorSelector', {
    'ft--colorSelector--state--noInteraction': disableInteraction,
    'ft--colorSelector--state--selected': selected,
    'ft--colorSelector--cursor--pointer': !!onClick
  });

  const colorCirlcleClasses = classNames('ft--colorSelector--colorCircle', {
    'ft--colorSelector--colorCircle--size--dynamic': !fixedSize,
    'ft--colorSelector--colorCircle--color--missing': isMissingColor
  });

  const textClasses = classNames('ft--colorSelector--text', {
    'ft--colorSelector--text--state--selected': selected
  });

  const style = patternImage
    ? { backgroundImage: `url(${patternImage})` }
    : { background: color || '#fff' };

  if (fixedSize) {
    style.width = fixedSize;
    style.height = fixedSize;
  }

  return (
    <span
      onClick={!disableInteraction ? onClick : null}
      className={wrapperClasses}
    >
      <span
        style={style}
        selected={selected}
        className={colorCirlcleClasses}
      />
      {text && <span className={textClasses}>{text}</span>}
    </span>
  );
};

ColorSelector.defaultProps = {
  selected: false,
  disableInteraction: false
};

ColorSelector.propTypes = {
  color: PropTypes.string,
  patternImage: PropTypes.string, // overrides color if available
  onClick: PropTypes.func,
  disableInteraction: PropTypes.bool, // ignores click handler if true
  text: PropTypes.string,
  selected: PropTypes.bool,
  fixedSize: PropTypes.string // overrides dynamic size based on font-size
};


export default ColorSelector;
