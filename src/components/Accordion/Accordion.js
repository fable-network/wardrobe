import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AccordionItem from '../AccordionItem';

const Wrapper = styled.div``;

const Accordion = ({ children }) => <Wrapper>{children}</Wrapper>;

Accordion.Item = AccordionItem;

Accordion.propTypes = {
  /**
   * Array of `Accordion.Item`s.
   */
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Accordion;
