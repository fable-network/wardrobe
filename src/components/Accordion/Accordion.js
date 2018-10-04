import { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

import AccordionItem from '../AccordionItem';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.initialOpen || {}
    };
  }

  handleItemClick = (defaultClickHandler, itemIndex) => {
    if (typeof defaultClickHandler === 'function') {
      defaultClickHandler();
    }

    const currentOpenState = this.state.open;
    let newOpenState = {};
    if (this.props.canOpenMultiple) {
      newOpenState = {
        ...currentOpenState,
        [itemIndex]: !currentOpenState[itemIndex]
      };
    } else {
      newOpenState = {
        [itemIndex]: !currentOpenState[itemIndex]
      };
    }
    this.setState({ open: newOpenState });
  }

  modifyChildren = () => {
    const { children } = this.props;
    if (children && children.length > 1) {
      let itemIndex = -1;
      return children.map(child => {
        const isAccordionItem = get(child, 'type.displayName') === 'AccordionItem';
        if (isAccordionItem) {
          itemIndex += 1;
          return {
            ...child,
            props: {
              ...child.props,
              isOpen: !!this.state.open[itemIndex],
              onClick: this.handleItemClick.bind(this, child.props.onClick, itemIndex),
            }
          };
        }
        return child;
      });
    }
    return children;
  }

  render() {
    return this.modifyChildren();
  }
}

Accordion.Item = AccordionItem;

Accordion.defaultProps = {
  canOpenMultiple: false
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  initialOpen: PropTypes.object,
  canOpenMultiple: PropTypes.bool
};

export default Accordion;
