import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import DefaultStyleGuideRenderer from 'react-styleguidist/lib/rsg-components/StyleGuide/StyleGuideRenderer';
import { theme } from '../src/theme';
import GlobalStyles from '../src/globals/styles';
import GlobalChartStyles from '../src/globals/chart-styles';

class StyleGuideRendererWrapper extends PureComponent {
  render() {
    const { children, ...otherProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyles />
          <GlobalChartStyles />
          <DefaultStyleGuideRenderer {...otherProps}>{children}</DefaultStyleGuideRenderer>
        </Fragment>
      </ThemeProvider>
    );
  }
}

StyleGuideRendererWrapper.propTypes = {
  children: PropTypes.node,
};

export default StyleGuideRendererWrapper;
