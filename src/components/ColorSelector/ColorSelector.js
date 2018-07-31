import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ColorSelector.scss';

const ColorSelector = ({ onClick, patternImage, color, disableInteraction, text, selected }) => {
  const wrapperClasses = classNames('ft--colorSelector', {
    'ft--colorSelector--state-noInteraction': disableInteraction,
    'ft--colorSelector--state--selected': selected,
    'ft--colorSelector--hasPointerCursor': !!onClick
  });

  const colorCirlcleClasses = classNames('ft--colorSelector--colorCircle');

  const textClasses = classNames('ft--colorSelector--text', {
    'ft--colorSelector--text--state--selected': selected
  });

  const style = patternImage
    ? { backgroundImage: `url(${patternImage})` }
    : { backgroundColor: color };

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
}

ColorSelector.defaultProps = {
  color: '#FFF',
  selected: false,
  disableInteraction: false
}

ColorSelector.propTypes = {
  color: PropTypes.string,
  patternImage: PropTypes.string, //overrides color if available
  onClick: PropTypes.func,
  disableInteraction: PropTypes.bool, // ignores click handler if true
  text: PropTypes.string,
  selected: PropTypes.bool 
};


export default ColorSelector;
