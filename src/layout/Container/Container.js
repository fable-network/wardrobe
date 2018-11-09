import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { paddingHorizontal, marginHorizontal } from '../../helpers/styled';

const responsiveCss = css`
  ${p => p.theme.tablet_up`
    width: ${p.theme.containerMaxWidthTablet};
  `};
  ${p => p.theme.desktop_up`
    width: ${p.theme.containerMaxWidthDesktop};
  `};
  ${p => p.theme.wide_up`
    width: ${p.theme.containerMaxWidthWide};
  `};
`;

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  ${p => paddingHorizontal(`calc(${p.theme.gridGutterWidth} / 2)`)};
  ${marginHorizontal('auto')};
  ${p => !p.fluid && responsiveCss};
`;

Container.propTypes = {
  /** `true`, if you want the Container to always be 100% wide */
  fluid: PropTypes.bool,
};

Container.defaultProps = {
  fluid: false,
};

/** @component */
export default Container;
