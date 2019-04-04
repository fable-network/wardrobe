import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import noop from 'lodash/noop';
import IconButton from '../IconButton';
import Icon from '../Icon';

const PADDINGS = {
  small: '16px 24px',
  normal: '24px 48px',
  large: '24px 48px',
};

const WIDTHS = {
  small: 'width: 300px',
  normal: 'width: 600px',
  large: 'width: 900px',
  auto: `
    width: auto;
    max-width: 900px;
  `,
};

const HeaderStyled = styled.header.attrs({ tabIndex: 0 })`
  outline: none;
`;

const FooterStyled = styled.footer``;

const BodyStyled = styled.div``;

const WrapperResponsive = css`
  ${p => p.theme.desktop_up`
    flex-flow: row-reverse wrap;
    align-items: center;
    justify-content: space-between;
    > * + * {
      margin-top: 0;
    }
  `};
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${p => p.theme.white};
  box-shadow: ${p => p.theme.shadow};
  border: solid 1px ${p => p.theme.grey05};
  border-radius: ${p => p.theme.borderRadius};
  width: 100%;
  max-width: 100%;
  position: relative;

  ${p => p.theme.mobile`
    min-height: 100vh;
  `};

  ${p => p.theme.desktop_up`
    ${WIDTHS[p.size]};
  `};

  ${HeaderStyled} {
    border-bottom: solid 1px ${p => p.theme.grey05};
    padding: ${p => PADDINGS[p.size] || PADDINGS.normal};
    font-size: 1.25em;
    font-weight: 500;
    text-align: center;
    color: ${p => p.theme.primary};
    ${p => p.theme.desktop_up`
      font-size: ${p.size === 'small' ? '1.25em' : '1.5em'};
    `};
  }

  ${FooterStyled} {
    border-top: solid 1px ${p => p.theme.grey05};
    padding: ${p => PADDINGS[p.size] || PADDINGS.normal};
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    > * + * {
      margin-top: 20px;
    }

    ${p => p.size !== 'small' && WrapperResponsive};
  }

  ${BodyStyled} {
    flex: 1;
    padding: ${p => PADDINGS[p.size] || PADDINGS.normal};
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 8px;
  right: 8px;
  overflow: hidden;
`;

/**
 * Dialog component.
 */
function Dialog(props) {
  const { size, children, showCloseButton, onClose, ...otherProps } = props;
  return (
    <Wrapper {...otherProps} size={size}>
      {children}
      {showCloseButton && (
        <CloseButton onClick={onClose} appearance="primary">
          <Icon name="cross" fill="currentColor" />
        </CloseButton>
      )}
    </Wrapper>
  );
}

Dialog.defaultProps = {
  size: 'normal',
  showCloseButton: false,
  onClose: noop,
};

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['auto', 'small', 'normal', 'large']),
  showCloseButton: PropTypes.bool,
  onClose: PropTypes.func,
};

Dialog.Header = HeaderStyled;
Dialog.Footer = FooterStyled;
Dialog.Body = BodyStyled;

/** @component */
export default Dialog;
