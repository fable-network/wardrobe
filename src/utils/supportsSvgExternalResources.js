/**
 * How to use:
 *
 * ```
 * if (!supportsSvgExternalResources()) {
 *  import('svg4everybody').then((svg4everybody) => {
 *    svg4everybody.default({ polyfill: true });
 *  });
 * }
 * ```
 */

export default () =>
  document.implementation &&
  document.implementation.hasFeature(
    'http://www.w3.org/TR/SVG11/feature#ExternalResourcesRequired',
    '1.1'
  );
